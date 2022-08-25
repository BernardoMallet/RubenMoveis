import * as React from "react";
import { CarouselWrapper, SCarouselSlide, SCarouselSlides, SCarouselWrapper } from "./styles";
interface ICarouselProps {
  currentSlide: number;
}

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <CarouselWrapper>
    <SCarouselWrapper>
      <SCarouselSlides currentSlide={currentSlide}>
        {activeSlide}
      </SCarouselSlides>
    </SCarouselWrapper>
    <button
      onClick={() => {
        setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
      }}
    >
      Left
    </button>
    <button
      onClick={() => {
        setCurrentSlide((currentSlide + 1) % activeSlide.length);
      }}
    >
      Right
    </button>
  </CarouselWrapper>
  );
};

export default Carousel;
