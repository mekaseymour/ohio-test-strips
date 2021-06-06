import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import accuChekAvivaPlusProductImage from '../assets/images/products/accuchek-aviva-plus.jpeg';
import accuChekGuideProductImage from '../assets/images/products/accuchek-guide.png';
import accuChekLancetsProductImage from '../assets/images/products/accuchek-lancets.png';
import accuCheckSmartviewProductImage from '../assets/images/products/accuchek-smartview.png';
import oneTouchLancets from '../assets/images/products/one-touch-lancets.png';
import bayerContour from '../assets/images/products/bayer-contour.png';
import bayerContourNext from '../assets/images/products/bayer-contour-next.png';
import dexcomG6Sensors from '../assets/images/products/dexcom-g6-sensors.png';
import freestyleLiteProductImage from '../assets/images/products/freestyle-lite.png';
import oneTouchUltraProductImage from '../assets/images/products/one-touch-ultra.png';

const productsData = [
    {
        img: freestyleLiteProductImage,
        name: 'Freestyle Lite'
    },
    {
        img: oneTouchUltraProductImage,
        name: 'One Touch - Ultra'
    },
    {
        img: accuChekAvivaPlusProductImage,
        name: 'Accu-Chek - Aviva Plus',
    },
    {
        img: accuChekGuideProductImage,
        name: 'Accu-Chek - Guide',
    },
    {
        img: accuChekLancetsProductImage,
        name: 'Accu-Chek - Lancets',
    },
    {
        img: accuCheckSmartviewProductImage,
        name: 'Accu-Chek - Smartview',
    },
    {
        img: oneTouchLancets,
        name: 'One Touch Lancets',
    },
    {
        img: bayerContour,
        name: 'Bayer Contour',
    },
    {
        img: bayerContourNext,
        name: 'Bayer Contour Next',
    },
    {
        img: dexcomG6Sensors,
        name: 'Dexcom G6 Sensors',
    }
]

const StyledImg = styled.img`
    height: 300px;
    width: auto !important;
`;

const StyledCarousel = styled(Carousel)`
    padding: 25px 0 0 0;

    .carousel.carousel-slider {
        .slider-wrapper.axis-horizontal {
            margin-bottom: 40px;
        }
        
        .control-dots {
            .dot {
                border-color: black;
                border-width: 2px;
                border-style: solid;
                height: 12px;
                width: 12px;
                opacity: 1;
                box-shadow: none;
            }

            .dot.selected {
                background-color: black;
            }
        }
    }
`;

const Slide = styled.div`
    margin-bottom: 20px;
`;


const ProductsWeBuyCarousel = () => {
    return (
        <div>
            <StyledCarousel autoPlay={true} infiniteLoop={true} emulateTouch={true} interval={3500} showArrows={false} showStatus={false}>
                { productsData.map(data => {
                    return (
                        <Slide>
                            <StyledImg src={data.img} />
                            <p>{data.name}</p>
                        </Slide>
                    )
                }) }
            </StyledCarousel>
        </div>
    )
};

export default ProductsWeBuyCarousel;