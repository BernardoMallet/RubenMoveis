import * as React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
`;

const SlideFour = () => (
  <SContainer>
    {/* <STextWrapper>
      <h1>Header 4</h1>
      <p>A short paragraph with some descriptive text.</p>
    </STextWrapper> */}
    <img
      src="././images/CarouselHome/Armario roupeiro.jpg"
      style={{
        maxWidth: "800px",
        maxHeight: "400px",
        width: "auto",
        height: "auto",
      }}
    />
  </SContainer>
);

export default SlideFour;
