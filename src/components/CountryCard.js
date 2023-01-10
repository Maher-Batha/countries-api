import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryCard = ({ countryName, population, capital, region, image }) => {
  return (
    <Wrapper>
      <Link to={`/${countryName}`}>
        <img src={image} alt={countryName} />
        <div className="info">
          <h2>{countryName}</h2>
          <p>
            population: <span>{population}</span>
          </p>
          <p>
            region: <span>{region}</span>
          </p>
          <p>
            capital: <span>{capital}</span>
          </p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default CountryCard;
const Wrapper = styled.li`
  background: var(--nav-bg);
  padding-bottom: 46px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  img {
    width: 100%;
    height: 164px;
    object-fit: cover;
    margin-bottom: 24px;
    border-radius: 5px 5px 0px 0px;
  }
  .info {
    padding: 0px 24px;
    h2 {
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 8px;
      span {
        font-weight: 200;
      }
    }
  }
`;
