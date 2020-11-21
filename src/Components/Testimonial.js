import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Testimonial() {
    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
       <section class="testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="slide-1 no-arrow">
                            <Slider {...settings}>
                                <div>
                                    <div class="testimonial-contain">
                                        <div class="media">
                                            <div class="testimonial-img">
                                                <img src="../assets/images/testimonial/1.jpg" class="img-fluid rounded-circle " alt="testimonial" />
                                            </div>
                                            <div class="media-body">
                                                <h5>mark jecno</h5>
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="testimonial-contain">
                                        <div class="media">
                                            <div class="testimonial-img">
                                                <img src="../assets/images/testimonial/2.jpg" class="img-fluid rounded-circle  " alt="testimonial" />
                                            </div>
                                            <div class="media-body">
                                                <h5>mark jecno</h5>
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="testimonial-contain">
                                        <div class="media">
                                            <div class="testimonial-img">
                                                <img src="../assets/images/testimonial/3.jpg" class="img-fluid rounded-circle  " alt="testimonial" />
                                            </div>
                                            <div class="media-body">
                                                <h5>mark jecno</h5>
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
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

export default Testimonial;
