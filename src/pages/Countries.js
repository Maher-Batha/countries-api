import React from "react";
import styled from "styled-components";
import { CountriesControls, CountriesContainer } from "../components";

const Countries = () => {
  return (
    <Wrapper>
      <div className="container">
        <CountriesControls />
        <CountriesContainer />
      </div>
    </Wrapper>
  );
};

export default Countries;
const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
  }
`;
