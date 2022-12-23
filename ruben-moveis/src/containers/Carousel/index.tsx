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
        <Box
          sx={{
            justifyContent: "space-around",
            display: "flex",
            marginTop: "1%",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <ArrowBackIosIcon
            sx={{
              cursor: "pointer",
              height: "60px",
              marginLeft: "5%"
              }}
            onClick={() => {
              setCurrentSlide(
                (currentSlide - 1 + activeSlide.length) % activeSlide.length
              );
            }}
          />

          <SCarouselWrapper>
            <SCarouselSlides currentSlide={currentSlide}>
              {activeSlide}
            </SCarouselSlides>
          </SCarouselWrapper>

          <ArrowForwardIosIcon
            sx={{
              cursor: "pointer",
              height: "60px",
              marginRight: "5%"
            }}
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
