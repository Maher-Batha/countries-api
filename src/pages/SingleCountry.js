import React, { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "../components";
import { CountriesContext } from "../context/CountriesContext";

const SingleCountry = () => {
  const { countryId } = useParams();
  const { countries, loading } = useContext(CountriesContext);
  if (loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  } else {
    const requiredCountry = countries.find((element) => {
      return element.name === countryId;
    });
    const {
      name,
      flags: { png },
      population,
      nativeName,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = requiredCountry;
    return (
      <Wrapper>
        <div className="container">
          <Link className="back" to="/">
            <FaChevronLeft />
            back
          </Link>
          <div className="single-country">
            <img src={png} alt={name} />
            <div className="information">
              <h1>{name}</h1>
              <div className="lists">
                <ul className="list one">
                  <li>
                    <p>
                      native name: <span>{nativeName}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      population: <span>{population}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      region: <span>{region}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      sub region: <span>{subregion}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      capital: <span>{capital}</span>
                    </p>
                  </li>
                </ul>
                <ul className="list two">
                  <li>
                    <p>
                      top level domain: <span>{topLevelDomain}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      currencies:
                      <span>{currencies[0].name}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      languages:
                      <span>{languages.map((item) => `${item.name}, `)}</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="borders">
                <p>border countries:</p>
                <span className="border-container">
                  {borders
                    ? borders.map((item, index) => {
                        return (
                          <span className="border-country" key={index}>
                            {item}
                          </span>
                        );
                      })
                    : "no border countries"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
};

export default SingleCountry;
const LoadingWrapper = styled.div`
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.section`
  .container {
    .back {
      width: 136px;
      height: 44px;
      background: var(--nav-bg);
      margin-bottom: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      text-transform: capitalize;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
      svg {
        margin-right: 10px;
        font-size: 12px;
      }
    }
    .single-country {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 45%;
        min-height: 300px;
        max-height: 401px;
        border-radius: 5px;
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
      }
      .information {
        width: 45%;
        h1 {
          margin-bottom: 23px;
          text-transform: capitalize;
        }
        .lists {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 68px;
          align-items: flex-start;
          .list {
            width: 50%;
            p {
              text-transform: capitalize;
              margin: 8px 0px;
              span {
                font-weight: 200;
                margin-left: 5px;
              }
            }
          }
        }
        .borders {
          display: flex;
          text-transform: capitalize;
          align-items: center;
          p {
            width: 140px;
          }
          .border-container {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            gap: 10px;
            margin-left: 10px;
            font-weight: 200;
            .border-country {
              width: 96px;
              height: 28px;
              display: flex;
              justify-content: center;
              align-items: center;
              background: var(--nav-bg);
              border-radius: 5px;
              box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
            }
          }
        }
      }
    }
  }
  @media (max-width: 1023px) {
    .container .single-country {
      flex-direction: column;
      img,
      .information {
        width: 100%;
      }
      img {
        margin-bottom: 40px;
      }
    }
  }
  @media (max-width: 767px) {
    .container {
      padding-bottom: 60px;
      .single-country {
        .information {
          .lists {
            margin-bottom: 0px;
            .list {
              width: 100%;
              margin-bottom: 32px;
            }
          }
          .borders {
            flex-direction: column;
            align-items: flex-start;
            p {
              margin-bottom: 20px;
            }
            .border-container {
              margin-left: 0px;
            }
          }
        }
      }
    }
  }
`;
