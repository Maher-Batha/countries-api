import React, { useContext } from "react";
import styled from "styled-components";
import { CountriesContext } from "../context/CountriesContext";
import { Loading, CountryCard } from "./index";

const CountriesContainer = () => {
  const { loading, tempCountries } = useContext(CountriesContext);
  if (loading) {
    return <Loading />;
  }
  if (tempCountries.length < 1) {
    return <h1>no countries matched your search</h1>;
  }
  return (
    <Wrapper>
      {tempCountries.map((item, index) => {
        const {
          name,
          population,
          region,
          capital,
          flags: { png },
        } = item;
        return (
          <CountryCard
            key={index}
            countryName={name}
            population={population}
            region={region}
            capital={capital}
            image={png}
          />
        );
      })}
    </Wrapper>
  );
};

export default CountriesContainer;
const Wrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 74px;
`;
