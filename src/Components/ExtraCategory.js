import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function ExtraCategory() {

    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
       
        <section class="box-category section-pt-space">
            <div class="container-fluid ">
                <div class="row">
                    <div class="col pl-0">
                        <div class="slide-10 no-arrow">
                            <Slider {...settings}>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>10% off</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>under @99</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>free shipping</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>extra 10% off</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>$79 cashback</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>80% off</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>on sale</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>only $49</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>under @150</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>save money</h4>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div class="box-category-contain">
                                            <h4>80% off</h4>
                                        </div>
                                    </a>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExtraCategory;