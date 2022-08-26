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

const SlideOne = () => (
  <SContainer>
    <STextWrapper>
      <h1>Header 1</h1>
      <p>A short paragraph with some descriptive text.</p>
    </STextWrapper>
    <img
      src="././images/CarouselHome/Balcões para lojas.jpeg"
      style={{
        maxWidth: "400px",
        maxHeight: "200px",
        width: "auto",
        height: "auto",
      }}
    />
  </SContainer>
);

export default SlideOne;
