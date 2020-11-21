import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Instagram() {

    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="instagram section-big-pt-space">
            <div className="container">
                <div className="row">
                    <div className="col ">
                        <div className="insta-contant no-arrow">
                            <div className="slide-7 no-arrow">
                                <Slider {...settings}>
                                    <div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/1.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/2.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/3.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/4.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/5.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/6.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/7.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/8.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/9.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/10.jpg" className="img-fluid  " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/11.jpg" className="img-fluid    " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/12.jpg" className="img-fluid    " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/13.jpg" className="img-fluid    " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/14.jpg" className="img-fluid    " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/2.jpg" className="img-fluid    " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                        <div className="instagram-box">
                                            <img src="../assets/images/insta/6.jpg" className="img-fluid    " alt="insta" />
                                            <div className="insta-cover">
                                                <i className="fa fa-instagram" ></i>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            <div className="insta-sub-contant">
                                <div className="insta-title">
                                    <h4><span>#</span>INSTAGRAM</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instagram;