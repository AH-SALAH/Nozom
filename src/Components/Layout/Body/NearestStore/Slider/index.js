import React from 'react';

import Fab from '@material-ui/core/Fab';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import { useTheme } from '@material-ui/core';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./slickOverwrite.scss";

import SliderItem from './SliderItem';



// const arrowStyle = makeStyles(theme => ({
//     root:{
//         flexGrow:1,
//         position: 'absolute',
//         top: 'calc(50% - 56px/2)',
//         // top: 'calc(0% - 70%)',
//         zIndex: parseInt(theme.zIndex.mobileStepper/999)
//     },
//     slickRightArrow:{
//         right: 0,
//         // left: 'calc(0px + 35px *2)',
//     },
//     slickLeftArrow:{
//         left: 0,
//     }
// }));

export const CustomRightArrow = (props) => <Fab onClick={props.nextSlide || nextSlide} /*className={`${arrowStyle().root} ${arrowStyle().slickRightArrow}`}*/ {...props} size="small" aria-label="nextArrow"><ChevronRight /></Fab>;
export const CustomLeftArrow = (props) => <Fab onClick={props.prevSlide || prevSlide} /*className={`${arrowStyle().root} ${arrowStyle().slickLeftArrow}`}*/ {...props} size="small" aria-label="prevArrow"><ChevronLeft /></Fab>;

export let slickSliderRef = {};

export const nextSlide = () => {
    slickSliderRef.slickNext();
};

export const prevSlide = () => {
    slickSliderRef.slickPrev();
};


const SlickSlider = ({ options, itemsData }) => {

    const theme = useTheme();

    const defaults = {
        // dots: true,
        // arrows: false,
        // infinite: true,
        lazyLoad: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: false,
        className: "center",
        centerPadding: "60px",
        // adaptiveHeight: true,
        rtl: theme.direction === 'rtl',
        nextArrow: <CustomRightArrow />,
        prevArrow: <CustomLeftArrow />,
        responsive: [
            {
                breakpoint: theme.breakpoints.values.lg,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: theme.breakpoints.values.md,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: theme.breakpoints.values.sm,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settings = Object.assign({}, defaults, options);


    return (
        <Slider {...settings} ref={slick => { slickSliderRef = slick }}>
            {/* {console.log("slider: ", itemData)} */}
            {
                itemsData && itemsData.length && itemsData.map((item, i) =>
                    <SliderItem key={i} item={item} k={i}/>
                )
            }
        </Slider>
    )
}

export default SlickSlider;
