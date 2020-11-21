import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function SpecialProduct() {

    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="title1 section-my-space">
                <h4>Special Products</h4>
            </div>

            <section className="product section-big-pb-space">
                <div className="custom-container">
                    <div className="row ">
                        <div className="col pr-0">
                            <div className="product-slide-6 no-arrow mb--10">
                                <Slider {...settings}>
                                    <div>
                                        <div className="product-box">
                                            <div className="product-imgbox">
                                                <div className="product-front">
                                                    <img src="../assets/images/layout-1/product/1.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-back">
                                                    <img src="../assets/images/layout-1/product/a1.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-icon">
                                                    <button  onclick="openCart()" type="button" >
                                                        <i className="ti-bag"></i>
                                                    </button>
                                                    <a href="javascript:void(0)" title="Add to Wishlist">
                                                        <i className="ti-heart" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                        <i className="ti-search" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="compare.html" title="Compare">
                                                        <i className="fa fa-exchange" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                                <div className="new-label">
                                                    <div>new</div>
                                                </div>
                                                <div className="on-sale">
                                                    on sale
                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <div className="detail-title">
                                                    <div className="detail-left">
                                                        <div className="rating-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a href="#">
                                                            <h6 className="price-title">
                                                                reader will be distracted.
                                                            </h6>
                                                        </a>
                                                    </div>
                                                    <div className="detail-right">
                                                        <div className="check-price">
                                                            $ 56.21
                                                        </div>
                                                        <div className="price">
                                                            <div className="price">
                                                                $ 24.05
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box">
                                            <div className="product-imgbox">
                                                <div className="product-front">
                                                    <img src="../assets/images/layout-1/product/2.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-back">
                                                    <img src="../assets/images/layout-1/product/a2.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-icon">
                                                    <button  onclick="openCart()" type="button" >
                                                        <i className="ti-bag" ></i>
                                                    </button>
                                                    <a href="javascript:void(0)" title="Add to Wishlist">
                                                        <i className="ti-heart" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                        <i className="ti-search" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="compare.html" title="Compare">
                                                        <i className="fa fa-exchange" aria-hidden="true"></i>
                                                    </a>

                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <div className="detail-title">
                                                    <div className="detail-left">
                                                        <div className="rating-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a href="#">
                                                            <h6 className="price-title">
                                                                reader will be distracted.
                                                            </h6>
                                                        </a>
                                                    </div>
                                                    <div className="detail-right">
                                                        <div className="check-price">
                                                            $ 56.21
                                                        </div>
                                                        <div className="price">
                                                            <div className="price">
                                                                $ 24.05
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box">
                                            <div className="product-imgbox">
                                                <div className="product-front">
                                                    <img src="../assets/images/layout-1/product/3.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-back">
                                                    <img src="../assets/images/layout-1/product/a3.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-icon">
                                                    <button  onclick="openCart()" type="button" >
                                                        <i className="ti-bag" ></i>
                                                    </button>
                                                    <a href="javascript:void(0)" title="Add to Wishlist">
                                                        <i className="ti-heart" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                        <i className="ti-search" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="compare.html" title="Compare">
                                                        <i className="fa fa-exchange" aria-hidden="true"></i>
                                                    </a>

                                                </div>
                                                <div className="new-label">
                                                    <div>new</div>
                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <div className="detail-title">
                                                    <div className="detail-left">
                                                        <div className="rating-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a href="#">
                                                            <h6 className="price-title">
                                                                reader will be distracted.
                                                            </h6>
                                                        </a>
                                                    </div>
                                                    <div className="detail-right">
                                                        <div className="check-price">
                                                            $ 56.21
                                                        </div>
                                                        <div className="price">
                                                            <div className="price">
                                                                $ 24.05
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box">
                                            <div className="product-imgbox">
                                                <div className="product-front">
                                                    <img src="../assets/images/layout-1/product/4.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-back">
                                                    <img src="../assets/images/layout-1/product/a4.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-icon">
                                                    <button  onclick="openCart()" type="button" >
                                                        <i className="ti-bag" ></i>
                                                    </button>
                                                    <a href="javascript:void(0)" title="Add to Wishlist">
                                                        <i className="ti-heart" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                        <i className="ti-search" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="compare.html" title="Compare">
                                                        <i className="fa fa-exchange" aria-hidden="true"></i>
                                                    </a>

                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <div className="detail-title">
                                                    <div className="detail-left">
                                                        <div className="rating-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a href="#">
                                                            <h6 className="price-title">
                                                                reader will be distracted.
                                                            </h6>
                                                        </a>
                                                    </div>
                                                    <div className="detail-right">
                                                        <div className="check-price">
                                                            $ 56.21
                                                        </div>
                                                        <div className="price">
                                                            <div className="price">
                                                                $ 24.05
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box">
                                            <div className="product-imgbox">
                                                <div className="product-front">
                                                    <img src="../assets/images/layout-1/product/5.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-back">
                                                    <img src="../assets/images/layout-1/product/a5.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-icon">
                                                    <button  onclick="openCart()" type="button" >
                                                        <i className="ti-bag" ></i>
                                                    </button>
                                                    <a href="javascript:void(0)" title="Add to Wishlist">
                                                        <i className="ti-heart" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                        <i className="ti-search" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="compare.html" title="Compare">
                                                        <i className="fa fa-exchange" aria-hidden="true"></i>
                                                    </a>

                                                </div>
                                                <div className="new-label">
                                                    <div>new</div>
                                                </div>
                                                <div className="on-sale">
                                                    on sale
                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <div className="detail-title">
                                                    <div className="detail-left">
                                                        <div className="rating-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a href="#">
                                                            <h6 className="price-title">
                                                                reader will be distracted.
                                                            </h6>
                                                        </a>
                                                    </div>
                                                    <div className="detail-right">
                                                        <div className="check-price">
                                                            $ 56.21
                                                        </div>
                                                        <div className="price">
                                                            <div className="price">
                                                                $ 24.05
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box">
                                            <div className="product-imgbox">
                                                <div className="product-front">
                                                    <img src="../assets/images/layout-1/product/6.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-back">
                                                    <img src="../assets/images/layout-1/product/a6.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-icon">
                                                    <button  onclick="openCart()" type="button" >
                                                        <i className="ti-bag" ></i>
                                                    </button>
                                                    <a href="javascript:void(0)" title="Add to Wishlist">
                                                        <i className="ti-heart" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                        <i className="ti-search" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="compare.html" title="Compare">
                                                        <i className="fa fa-exchange" aria-hidden="true"></i>
                                                    </a>

                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <div className="detail-title">
                                                    <div className="detail-left">
                                                        <div className="rating-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a href="#">
                                                            <h6 className="price-title">
                                                                reader will be distracted.
                                                            </h6>
                                                        </a>
                                                    </div>
                                                    <div className="detail-right">
                                                        <div className="check-price">
                                                            $ 56.21
                                                        </div>
                                                        <div className="price">
                                                            <div className="price">
                                                                $ 24.05
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box">
                                            <div className="product-imgbox">
                                                <div className="product-front">
                                                    <img src="../assets/images/layout-1/product/7.jpg" className="img-fluid"   alt="product" />
                                                </div>
                                                <div className="product-back">
                                                    <img src="../assets/images/layout-1/product/a7.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-icon">
                                                    <button  onclick="openCart()" type="button" >
                                                        <i className="ti-bag" ></i>
                                                    </button>
                                                    <a href="javascript:void(0)" title="Add to Wishlist">
                                                        <i className="ti-heart" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                        <i className="ti-search" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="compare.html" title="Compare">
                                                        <i className="fa fa-exchange" aria-hidden="true"></i>
                                                    </a>

                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <div className="detail-title">
                                                    <div className="detail-left">
                                                        <div className="rating-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a href="#">
                                                            <h6 className="price-title">
                                                                reader will be distracted.
                                                            </h6>
                                                        </a>
                                                    </div>
                                                    <div className="detail-right">
                                                        <div className="check-price">
                                                            $ 56.21
                                                        </div>
                                                        <div className="price">
                                                            <div className="price">
                                                                $ 24.05
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="product-box">
                                            <div className="product-imgbox">
                                                <div className="product-front">
                                                    <img src="../assets/images/layout-1/product/7.jpg" className="img-fluid"   alt="product" />
                                                </div>
                                                <div className="product-back">
                                                    <img src="../assets/images/layout-1/product/a7.jpg" className="img-fluid  " alt="product" />
                                                </div>
                                                <div className="product-icon">
                                                    <button  onclick="openCart()" type="button" >
                                                        <i className="ti-bag" ></i>
                                                    </button>
                                                    <a href="javascript:void(0)" title="Add to Wishlist">
                                                        <i className="ti-heart" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                        <i className="ti-search" aria-hidden="true"></i>
                                                    </a>
                                                    <a href="compare.html" title="Compare">
                                                        <i className="fa fa-exchange" aria-hidden="true"></i>
                                                    </a>

                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <div className="detail-title">
                                                    <div className="detail-left">
                                                        <div className="rating-star">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <a href="#">
                                                            <h6 className="price-title">
                                                                reader will be distracted.
                                                            </h6>
                                                        </a>
                                                    </div>
                                                    <div className="detail-right">
                                                        <div className="check-price">
                                                            $ 56.21
                                                        </div>
                                                        <div className="price">
                                                            <div className="price">
                                                                $ 24.05
                                                            </div>
                                                        </div>
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
            </section>
        </React.Fragment>
    )
}

export default SpecialProduct;