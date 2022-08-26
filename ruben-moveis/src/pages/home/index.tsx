import HeaderLogo from 'components/Header';
import HeaderTop from 'components/HeaderTop';
import NavBar from 'components/NavBar';
import Carousel from 'containers/Carousel';
import SlideOne from 'containers/Carousel/CarouselSlides/SlideA';
import SlideTwo from 'containers/Carousel/CarouselSlides/SlideB';
import SlideThree from 'containers/Carousel/CarouselSlides/SlideC';
import SlideFour from 'containers/Carousel/CarouselSlides/SlideD';
import SlideFive from 'containers/Carousel/CarouselSlides/SlideE';
import SlideSix from 'containers/Carousel/CarouselSlides/SlideF';
import { NextPage } from 'next';
import React from 'react';


const Index: NextPage = () => {
    return (
        <>
       <HeaderTop />
       <HeaderLogo />
       <NavBar />
       <Carousel>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
        <SlideFour />
        <SlideFive />
        <SlideSix />
       </Carousel>
       </>
    )
}

export default Index;