import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function MediaBanner() {
    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <section className="section-big-py-space b-g-white">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="media-slide no-arrow">
                            <Slider {...settings}>
                                <div>
                                    <div className="media-banner ">
                                        <div className="media-banner-box">
                                            <div className="media-heading">
                                                <h5>New Products</h5>
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
                                                <h5>Feature products</h5>
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
                                <div >
                                    <div className="media-banner">
                                        <div className="media-banner-box">
                                            <div className="media-heading">
                                                <h5>Best Sellers</h5>
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
                                <div >
                                    <div className="media-banner border-0">
                                        <div className="media-banner-box">
                                            <div className="media-heading">
                                                <h5>50% off</h5>
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
                                <div >
                                    <div className="media-banner">
                                        <div className="media-banner-box">
                                            <div className="media-heading">
                                                <h5>Best Sellers</h5>
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
                            </Slider>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
}

export default MediaBanner;