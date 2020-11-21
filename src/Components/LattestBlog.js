import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function LattestBlog() {

    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
       
            <section className="blog ">
                <div className="title3">
                    <h4>letest blog</h4>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col pr-0">
                            <div className="blog-slide no-arrow">
                                <Slider {...settings}>
                                    <div >
                                        <div className="blog-contain">
                                            <div className="blog-img">
                                                <img src="../assets/images/layout-1/blog/1.jpg" alt="blog" className="img-fluid  w-100" />
                                            </div>
                                            <div className="blog-details">
                                                <h4>Latest News Post</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.</p>
                                                <span><a href="#">read more</a></span>
                                            </div>
                                            <div className="blog-label">
                                                <p>25 july 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="blog-contain">
                                            <div className="blog-img">
                                                <img src="../assets/images/layout-1/blog/2.jpg" alt="blog" className="img-fluid w-100 " />
                                            </div>
                                            <div className="blog-details">
                                                <h4>Latest News Post</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.</p>
                                                <span><a href="#">read more</a></span>
                                            </div>
                                            <div className="blog-label">
                                                <p>25 july 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="blog-contain">
                                            <div className="blog-img">
                                                <img src="../assets/images/layout-1/blog/3.jpg" alt="blog" className="img-fluid w-100 " />
                                            </div>
                                            <div className="blog-details">
                                                <h4>Latest News Post</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.</p>
                                                <span><a href="#">read more</a></span>
                                            </div>
                                            <div className="blog-label">
                                                <p>25 july 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="blog-contain">
                                            <div className="blog-img">
                                                <img src="../assets/images/layout-1/blog/2.jpg" alt="blog" className="img-fluid  w-100" />
                                            </div>
                                            <div className="blog-details">
                                                <h4>Latest News Post</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend a massa rhoncus gravida.</p>
                                                <span><a href="#">read more</a></span>
                                            </div>
                                            <div className="blog-label">
                                                <p>25 july 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default LattestBlog;