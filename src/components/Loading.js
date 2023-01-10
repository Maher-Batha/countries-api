import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <>
      <Wrapper>
        <span className="column one"></span>
        <span className="column two"></span>
        <span className="column three"></span>
      </Wrapper>
    </>
  );
};

export default Loading;
const Wrapper = styled.div`
  width: fit-content;
  height: 120px;
  padding: 0px;
  margin: 0px;
  .column {
    width: 30px;
    background: transparent;
    display: inline-block;
    margin: 0px 2.5px;
    position: relative;
    &.one {
      height: 50%;
    }
    &.two {
      height: 75%;
    }
    &.three {
      height: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: lavender;
      bottom: 0px;
      left: 0px;
    }
    &.one::after {
      animation: loading-one 1s linear infinite both;
    }
    &.two::after {
      animation: loading-one 1s linear 0.1s infinite both;
    }
    &.three::after {
      animation: loading-one 1s linear 0.2s infinite both;
    }
  }
`;
