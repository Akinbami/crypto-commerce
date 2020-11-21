import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function RoundedCategory() {
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
    <section className="rounded-category">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="slide-6 no-arrow">
                        <Slider {...settings}>
                            <div>
                                <div className="category-contain">
                                    <a href="#">
                                        <div className="img-wrapper">
                                            <img src="../assets/images/layout-1/rounded-cat/1.png" alt="category" className="img-fluid" />
                                        </div>
                                        <div>
                                            <div className="btn-rounded">
                                                flower
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="category-contain">
                                    <a href="#">
                                        <div className="img-wrapper">
                                            <img src="../assets/images/layout-1/rounded-cat/2.png" alt="category" className="img-fluid  " />
                                        </div>
                                        <div>
                                            <div className="btn-rounded">
                                                Furniture
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="category-contain">
                                    <a href="#">
                                        <div className="img-wrapper">
                                            <img src="../assets/images/layout-1/rounded-cat/3.png" alt="category" className="img-fluid  " />
                                        </div>
                                        <div>
                                            <div className="btn-rounded">
                                                Bag
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="category-contain">
                                    <a href="#">
                                        <div className="img-wrapper">
                                            <img src="../assets/images/layout-1/rounded-cat/4.png" alt="category" className="img-fluid  " />
                                        </div>
                                        <div>
                                            <div className="btn-rounded">
                                                Tools
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="category-contain">
                                    <a href="#">
                                        <div className="img-wrapper">
                                            <img src="../assets/images/layout-1/rounded-cat/5.png" alt="category" className="img-fluid  " />
                                        </div>
                                        <div>
                                            <div className="btn-rounded">
                                                Grocery
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="category-contain">
                                    <a href="#">
                                        <div className="img-wrapper">
                                            <img src="../assets/images/layout-1/rounded-cat/6.png" alt="category" className="img-fluid  " />
                                        </div>
                                        <div>
                                            <div className="btn-rounded">
                                                camera
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="category-contain">
                                    <a href="#">
                                        <div className="img-wrapper">
                                            <img src="../assets/images/layout-1/rounded-cat/7.png" alt="category" className="img-fluid  " />
                                        </div>
                                        <div>
                                            <div className="btn-rounded">
                                                cardigans
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default RoundedCategory;