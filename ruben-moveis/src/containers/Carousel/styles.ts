import styled, { css } from "styled-components";
interface ICarouselSlide {
  active?: boolean;
}

interface ICarouselProps {
  currentSlide: number;
}

export const CarouselWrapper = styled.div`
  margin-top: 5px;
`;

export const SCarouselWrapper = styled.div`
  display: flex;
`;

export const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

export const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${props =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;