import * as React from "react";
import {
  CarouselWrapper,
  SCarouselSlide,
  SCarouselSlides,
  SCarouselWrapper,
} from "./styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
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
    <>
      <CarouselWrapper>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SCarouselWrapper>
            <SCarouselSlides currentSlide={currentSlide}>
              {activeSlide}
            </SCarouselSlides>
          </SCarouselWrapper>
        </Box>
        <Box
          sx={{
            justifyContent: "space-around",
            display: "flex",
            marginTop: "1%",
          }}
        >
          <ArrowBackIosIcon
            onClick={() => {
              setCurrentSlide(
                (currentSlide - 1 + activeSlide.length) % activeSlide.length
              );
            }}
          />
          <ArrowForwardIosIcon
            onClick={() => {
              setCurrentSlide((currentSlide + 1) % activeSlide.length);
            }}
          />
        </Box>
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
