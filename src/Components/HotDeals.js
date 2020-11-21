import React, { useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function HotDeals() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });
    const banner_settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    };

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        swipeToSlide: true,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
    };

return (
    <section className=" b-g-white section-big-pt-space">
        <div className="container">
            <div className="row hot-1">
                <div className="col-lg-3 col-sm-6  col-12  ">
                    <div className="slide-1   no-arrow">
                        <Slider {...banner_settings}>
                            <div>
                                <div className="media-banner">
                                    <div className="media-banner-box">
                                        <div className="media-heading">
                                            <h5>on sale</h5>
                                        </div>
                                    </div>
                                    <div className="media-banner-box">
                                        <div className="media">
                                            <img src="../assets/images/layout-1/media-banner/1.jpg" className="img-fluid  " alt="banner" />
                                            <div className="media-body">
                                                <div className="media-contant">
                                                    <div>
                                                        <div className="rating">
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                        </div>
                                                        <p>
                                                            Generator
                                                            on Internet.
                                                        </p>
                                                        <h6>$153.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-banner-box">
                                        <div className="media">
                                            <img src="../assets/images/layout-1/media-banner/2.jpg" className="img-fluid  " alt="banner" />
                                            <div className="media-body">
                                                <div className="media-contant">
                                                    <div>
                                                        <div className="rating">
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                        </div>
                                                        <p>
                                                            Generator
                                                            on Internet.
                                                        </p>
                                                        <h6>$153.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-banner-box">
                                        <div className="media-view">
                                            <h5>View More</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="media-banner">
                                    <div className="media-banner-box">
                                        <div className="media-heading">
                                            <h5>on sale</h5>
                                        </div>
                                    </div>
                                    <div className="media-banner-box">
                                        <div className="media">
                                            <img src="../assets/images/layout-1/media-banner/3.jpg" className="img-fluid  " alt="banner" />
                                            <div className="media-body">
                                                <div className="media-contant">
                                                    <div>
                                                        <div className="rating">
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                        </div>
                                                        <p>
                                                            Generator
                                                            on Internet.
                                                        </p>
                                                        <h6>$153.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-banner-box">
                                        <div className="media">
                                            <img src="../assets/images/layout-1/media-banner/4.jpg" className="img-fluid  " alt="banner" />
                                            <div className="media-body">
                                                <div className="media-contant">
                                                    <div>
                                                        <div className="rating">
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                            <i className="fa fa-star" ></i>
                                                        </div>
                                                        <p>
                                                            Generator
                                                            on Internet.
                                                        </p>
                                                        <h6>$153.00</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-banner-box">
                                        <div className="media-view">
                                            <h5>View More</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </Slider>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6  col-12">
                    <div className="Jewellery-banner">
                        <a>save 30% off</a>
                        <h6>Jewellery</h6>
                    </div>
                </div>
                <div className="col-lg-7  col-sm-12 col-12  ">
                    <div className="hot-deal">
                        <div className="hot-deal-box">
                            <div className="slide-1">
                                <Slider {...banner_settings}>
                                    <div>
                                        <div className="hot-deal-contain1 hot-deal-banner-1">
                                            <div className="hot-deal-heading">
                                                <h5>today’s hot deal</h5>
                                            </div>
                                            <div className="row hot-deal-subcontain">
                                                <div className="col-lg-4 col-sm-4 col-12">
                                                    <div className="hotdeal-right-slick-1 no-arrow">
                                                        <Slider
                                                        {...settingsMain}
                                                            asNavFor={nav2}
                                                            ref={slider => (setSlider1(slider))}>
                                                        <div><img src="../assets/images/layout-1/hot-deal/1.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                        <div><img src="../assets/images/layout-1/hot-deal/2.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                        <div><img src="../assets/images/layout-1/hot-deal/3.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                        <div><img src="../assets/images/layout-1/hot-deal/4.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                        </Slider>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="hot-deal-center">
                                                        <div>
                                                            <div className="timer">
                                                                <p className="demo">
                                                                    <span>
                                                                        25
                                                                        <span>days</span>
                                                                    </span>
                                                                    <span>:</span>
                                                                    <span>
                                                                        12
                                                                <span>hrs</span>
                                                                    </span>
                                                                    <span>:</span>
                                                                    <span>
                                                                        45
                                                                <span>min</span>
                                                                    </span>
                                                                    <span>:</span>
                                                                    <span>
                                                                        03
                                                                <span>sec</span>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div>
                                                                <h5>simply dummy text of the printing</h5>
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    it is a long established fact that a reader.
                                                                </p>
                                                                <div className="price">
                                                                    <span>$45.00</span>
                                                                    <span>$50.30</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-sm-2 p-l-md-0">
                                                    <div className="hotdeal-right-nav-1">
                                                        <Slider
                                                            {...settingsThumbs}
                                                            asNavFor={nav1}
                                                            ref={slider => (setSlider2(slider))}>
                                                            <div><img src="../assets/images/layout-1/hot-deal/1.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div><img src="../assets/images/layout-1/hot-deal/2.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div><img src="../assets/images/layout-1/hot-deal/3.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div><img src="../assets/images/layout-1/hot-deal/4.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="hot-deal-contain1 hot-deal-banner-1">
                                            <div className="hot-deal-heading">
                                                <h5>today’s hot deal</h5>
                                            </div>
                                            <div className="row hot-deal-subcontain">
                                                <div className="col-lg-4 col-sm-4 col-12">
                                                    <div className="hotdeal-right-slick-1 no-arrow">
                                                        <Slider
                                                        {...settingsMain}
                                                            asNavFor={nav2}
                                                            ref={slider => (setSlider1(slider))}>
                                                            <div className="right-slick-img"><img src="../assets/images/layout-1/hot-deal/4.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div className="right-slick-img"><img src="../assets/images/layout-1/hot-deal/3.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div className="right-slick-img"><img src="../assets/images/layout-1/hot-deal/2.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div className="right-slick-img"><img src="../assets/images/layout-1/hot-deal/1.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                        </Slider>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6">
                                                    <div className="hot-deal-center">
                                                        <div>
                                                            <div className="timer">
                                                                <p className="demo1">
                                                                    <span>
                                                                        25
                                                            <span>days</span>
                                                                    </span>
                                                                    <span>:</span>
                                                                    <span>
                                                                        12
                                                                <span>hrs</span>
                                                                    </span>
                                                                    <span>:</span>
                                                                    <span>
                                                                        45
                                                                <span>min</span>
                                                                    </span>
                                                                    <span>:</span>
                                                                    <span>
                                                                        03
                                                                <span>sec</span>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </div>
                                                            <div>
                                                                <h5>simply dummy text of the printing</h5>
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    it is a long established fact that a reader.
                                                                </p>
                                                                <div className="price">
                                                                    <span>$45.00</span>
                                                                    <span>$50.30</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-sm-2 p-l-md-0">
                                                    <div className="hotdeal-right-nav-1">
                                                        <Slider
                                                            {...settingsThumbs}
                                                            asNavFor={nav1}>
                                                            <div><img src="../assets/images/layout-1/hot-deal/4.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div><img src="../assets/images/layout-1/hot-deal/3.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div><img src="../assets/images/layout-1/hot-deal/2.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                            <div><img src="../assets/images/layout-1/hot-deal/1.jpg" alt="hot-deal" className="img-fluid  " /></div>
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HotDeals;