import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function BannerSlider() {
    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
        <section className="theme-slider section-pt-space">
            <div className="custom-container">
                <div className="row">
                    <div className="col-xl-8 col-lg-9 offset-xl-2 px-abjust">
                        <div className="slide-1 no-arrow">
                            <Slider {...settings}>
                                <div>
                                    <div className="slider-banner">
                                        <div className="slider-img">
                                            <ul className="layout2-slide-1">
                                                <li id="img-1"><img src="../assets/images/layout-1/slider/1.1.png" className="img-fluid" alt="slider" /></li>
                                            </ul>
                                        </div>
                                        <div className="slider-banner-contain">
                                            <div>
                                                <h4>the best</h4>
                                                <h1>loffer shoes</h1>
                                                <h2>minimum 30% off</h2>
                                                <a href="/" className="btn btn-rounded">
                                                    Shop Now
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="slider-banner">
                                        <div className="slider-img">
                                            <ul className="layout2-slide-2">
                                                <li id="img-2"><img src="../assets/images/layout-1/slider/1.2.png" className="img-fluid" alt="slider" /></li>
                                            </ul>
                                        </div>
                                        <div className="slider-banner-contain">
                                            <div>
                                                <h4>cinema festival</h4>
                                                <h1>reflex camera</h1>
                                                <h2>minimum 40% off</h2>
                                                <a href="/" className=" btn btn-rounded">
                                                    Shop Now
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="slider-banner">
                                        <div className="slider-img">
                                            <ul className="layout2-slide-3">
                                                <li id="img-3"><img src="../assets/images/layout-1/slider/1.3.png" className="img-fluid" alt="slider" /></li>
                                            </ul>
                                        </div>
                                        <div className="slider-banner-contain">
                                            <div>
                                                <h4>march special</h4>
                                                <h1>leather bag</h1>
                                                <h2>minimum 60% off</h2>
                                                <a href="/" className=" btn btn-rounded">
                                                    Shop Now
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-3 pl-0 offer-banner">
                        <div className="offer-banner-img">
                            <img src="../assets/images/layout-1/offer-banner.png" alt="offer-banner" className="img-fluid  " />
                        </div>
                        <div className="banner-contain">
                            <div>
                                <h5>Special Offer for you</h5>
                                <div className="discount-offer"><h1>50%</h1><sup>off</sup></div >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="collection-banner section-pt-space">
        <div className="custom-container">
          <div className="row collection collection-layout1">
            <div className="col-md-4 offset-xl-2 p-r-md-0">
              <div className="collection-banner-main p-left">
                <div className="collection-img">
                  <img src="../assets/images/layout-1/collection-banner/1.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>vivo</h3>
                    <h4>smart phone</h4>
                    <div className="shop">
                      <a>
                                            shop now
                        <i className="fa fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="collection-banner-main p-left">
                <div className="collection-img">
                  <img src="../assets/images/layout-1/collection-banner/2.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                <div className="collection-banner-contain">
                  <div>
                    <h3>hand</h3>
                    <h4>lether bag</h4>
                    <div className="shop">
                      <a>
                                            shop now
                        <i className="fa fa-arrow-circle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2  pl-md-0">
              <div className="collection-banner-main p-top banner-6">
                <div className="collection-img">
                  <img src="../assets/images/layout-1/collection-banner/7.jpg" className="img-fluid bg-img  " alt="banner" />
                </div>
                  <div className="collection-banner-contain">
                    <div>
                      <h6>10% off</h6>
                      <h4>Nikon Camera</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </React.Fragment>
    );
}

export default BannerSlider;