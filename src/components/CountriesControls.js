import React, { useContext, useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { RegionMenu } from "./index";
import styled from "styled-components";
import { CountriesContext } from "../context/CountriesContext";

const CountriesControls = () => {
  const { searchCountry, inputValue } = useContext(CountriesContext);
  const [showRegions, setShowRegions] = useState(false);
  return (
    <Wrapper>
      <div className="search-input">
        <FaSearch />
        <input
          type="text"
          placeholder="search for a country..."
          onChange={(e) => searchCountry(e.target.value)}
          value={inputValue}
        />
      </div>
      <div className="filter" onClick={() => setShowRegions(!showRegions)}>
        <p>filter by region</p>
        {showRegions ? <FaChevronUp /> : <FaChevronDown />}
        {showRegions && <RegionMenu />}
      </div>
    </Wrapper>
  );
};

export default CountriesControls;
const Wrapper = styled.header`
  width: 100%;
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search-input {
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      left: 32px;
      color: var(--font_color);
      transform: translateY(-50%);
    }
    input {
      width: 480px;
      height: 56px;
      color: var(--font_color);
      padding-left: 74px;
      background: var(--nav-bg);
      border-radius: 5px;
      border: none;
      outline: none;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
      &::placeholder {
        color: var(--font_color);
      }
    }
  }
  .filter {
    width: 200px;
    height: 56px;
    background: var(--nav-bg);
    border-radius: 5px;
    display: flex;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 18px;
    text-transform: capitalize;
    cursor: pointer;
    position: relative;
    svg {
      font-size: 12px;
    }
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    .search-input {
      width: 100%;
      margin-bottom: 40px;
      input {
        width: 100%;
      }
    }
  }
`;
