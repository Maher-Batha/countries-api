import React, { useContext } from "react";
import styled from "styled-components";
import { CountriesContext } from "../context/CountriesContext";

const RegionMenu = () => {
  const { filterCountry, countries } = useContext(CountriesContext);
  const countriesSet = [
    ...new Set(
      countries.map((item) => {
        return item.region;
      })
    ),
  ];
  return (
    <Wrapper>
      {countriesSet.map((item, index) => {
        return (
          <li key={index} onClick={(e) => filterCountry(e.target.textContent)}>
            {item}
          </li>
        );
      })}
    </Wrapper>
  );
};

export default RegionMenu;
const Wrapper = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  width: 100%;
  left: 0px;
  border-radius: 5px;
  background: var(--nav-bg);
  li {
    padding: 8px 24px;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--font_color);
    transition: all 0.5s;
    border-radius: 5px;
    &.active,
    &:hover {
      background: tomato;
    }
  }
`;
