import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function ProductDetailImage(props) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    
    const product = props.product;

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

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
        <section className="section-big-pt-space bg-light">
            <div className="collection-wrapper">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-lg-1 col-sm-2 col-xs-12">
                            <div className="row">
                                <div className="col-12 p-0">
                                    <div className="slider-right-nav">
                                        <Slider
                                            {...settingsThumbs}
                                            asNavFor={nav1}
                                            ref={slider => (setSlider2(slider))}>
                                            {product.images.map(image => <div>
                                                <img src={image} alt="" className="img-fluid  image_zoom_cls-0" />
                                            </div>)}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-10 col-xs-12 order-up">
                            <div className="product-right-slick no-arrow">
                                <Slider
                                    {...settingsMain}
                                    asNavFor={nav2}
                                    ref={slider => (setSlider1(slider))}>
                                    {product.images.map(image => <div>
                                        <img src={image} alt="" className="img-fluid  image_zoom_cls-0" />
                                    </div>)}
                                </Slider>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-right product-description-box ">
                                <h2>{product.name}</h2>
                                <div className="border-product">
                                    <h6 className="product-title">product details</h6>
                                    <p>{product.description}</p>
                                </div>
                                <div className="single-product-tables border-product detail-section">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Febric:</td>
                                                <td>Chiffon</td>
                                            </tr>
                                            <tr>
                                                <td>Color:</td>
                                                <td>Red</td>
                                            </tr>
                                            <tr>
                                                <td>Material:</td>
                                                <td>Crepe printed</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="border-product">
                                    <div className="product-icon">
                                        <ul className="product-social">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                        </ul>
                                        <form className="d-inline-block">
                                            <button className="wishlist-btn"><i className="fa fa-heart"></i><span className="title-font">Add To WishList</span></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="border-product pb-0">
                                    <h6 className="product-title">100% SECURE PAYMENT</h6>
                                    <div className="payment-card-bottom">
                                        <ul>
                                            <li>
                                                <a href="#"><img src="../assets/images/layout-1/pay/1.png" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="../assets/images/layout-1/pay/2.png" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="../assets/images/layout-1/pay/3.png" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="../assets/images/layout-1/pay/4.png" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="../assets/images/layout-1/pay/5.png" alt="" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-right product-form-box  product-right-exes">
                                <h4><del>{product.check_price}</del><span>55% off</span></h4>
                                <h3>{product.price}</h3>
                                <ul className="color-variant">
                                    <li className="bg-light0"></li>
                                    <li className="bg-light1"></li>
                                    <li className="bg-light2"></li>
                                </ul>
                                <div className="product-description border-product">
                                    <h6 className="product-title">Time Reminder</h6>
                                    <div className="timer">
                                        <p id="demo"><span>25 <span className="padding-l">:</span> <span className="timer-cal">Days</span> </span><span>22 <span className="padding-l">:</span> <span className="timer-cal">Hrs</span> </span><span>13 <span className="padding-l">:</span> <span className="timer-cal">Min</span> </span><span>57 <span className="timer-cal">Sec</span></span>
                                        </p>
                                    </div>
                                    <h6 className="product-title">select size</h6>
                                    <div className="modal fade" id="sizemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src="../assets/images/size-chart.jpg" alt="" className="img-fluid " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="size-box">
                                        <ul>
                                            <li className="active"><a href="#">s</a></li>
                                            <li><a href="#">m</a></li>
                                            <li><a href="#">l</a></li>
                                            <li><a href="#">xl</a></li>
                                        </ul>
                                    </div>
                                    <h6 className="product-title">quantity</h6>
                                    <div className="qty-box">
                                        <div className="input-group"><span className="input-group-prepend"><button type="button" className="btn quantity-left-minus" data-type="minus" data-field=""><i className="ti-angle-left"></i></button> </span>
                                            <input type="text" name="quantity" className="form-control input-number" value="1" /> <span className="input-group-prepend"><button type="button" className="btn quantity-right-plus" data-type="plus" data-field=""><i className="ti-angle-right"></i></button></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-buttons"><a href="#" data-toggle="modal" data-target="#addtocart" className="btn btn-normal">add to cart</a> <a href="#" className="btn btn-normal">buy now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductDetailImage;