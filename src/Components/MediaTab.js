import React from 'react';


function MediaTab() {
    return (
        <section className="section-big-pb-space ratio_40 pb-10">
            <section className="section-py-space" >
                <div className="tab-product-main">
                    <div className="tab-prodcut-contain">
                        <ul className="tabs tab-title">
                            <li className="current"><a href="tab-1.html">fashion</a></li>
                            <li className=""><a href="tab-2.html">electronic</a></li>
                            <li className=""><a href="tab-3.html">footware</a></li>
                            <li className=""><a href="tab-4.html">sports</a></li>
                            <li className=""><a href="tab-5.html">toys</a></li>
                            <li className=""><a href="tab-6.html">books</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="custom-container product">
                <div className="row">
                    <div className="col pr-0">
                        <div className="theme-tab product tab-abjust">
                            <div className="tab-content-cls">
                                <div id="tab-1" className="tab-content active default">
                                    <div className="product-slide-6 product-m no-arrow">
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
                                                        <button onclick="openCart()" type="button" >
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
                                                                <button onclick="openCart()" type="button" >
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
                                                                    <button onclick="openCart()" type="button" >
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
                                                                    <button onclick="openCart()" type="button" >
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
                                                                    <button onclick="openCart()" type="button" >
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
                                                                    <button onclick="openCart()" type="button" >
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
                                                                    <img src="../assets/images/layout-1/product/7.jpg" className="img-fluid" alt="product" />
                                                                </div>
                                                                <div className="product-back">
                                                                    <img src="../assets/images/layout-1/product/a7.jpg" className="img-fluid  " alt="product" />
                                                                </div>
                                                                <div className="product-icon">
                                                                    <button onclick="openCart()" type="button" >
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
                                                                    <img src="../assets/images/layout-1/product/8.jpg" className="img-fluid" alt="product" />
                                                                </div>
                                                                <div className="product-back">
                                                                    <img src="../assets/images/layout-1/product/a8.jpg" className="img-fluid  " alt="product" />
                                                                </div>
                                                                <div className="product-icon">
                                                                    <button onclick="openCart()" type="button" >
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
                                                </div>
                                            </div>
                                            <div id="tab-2" className="tab-content">
                                                <div className="product-slide-6 product-m no-arrow">
                                                    <div>
                                                        <div className="product-box">
                                                            <div className="product-imgbox">
                                                                <div className="product-front">
                                                                    <img src="../assets/images/layout-1/product/8.jpg" className="img-fluid" alt="product" />
                                                                </div>
                                                                <div className="product-back">
                                                                    <img src="../assets/images/layout-1/product/a8.jpg" className="img-fluid  " alt="product" />
                                                                </div>
                                                                <div className="product-icon">
                                                                    <button onclick="openCart()" type="button" >
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
                                                                    <img src="../assets/images/layout-1/product/1.jpg" className="img-fluid  " alt="product" />
                                                                </div>
                                                                <div className="product-back">
                                                                    <img src="../assets/images/layout-1/product/a1.jpg" className="img-fluid  " alt="product" />
                                                                </div>
                                                                <div className="product-icon">
                                                                    <button onclick="openCart()" type="button" >
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
                                                                    <button onclick="openCart()" type="button" >
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
                                                            1           </div>
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
                                                                        <button onclick="openCart()" type="button" >
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
                                                                                <button onclick="openCart()" type="button" >
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
                                                                                <button onclick="openCart()" type="button" >
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
                                                                                    <button onclick="openCart()" type="button" >
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
                                                                                    <img src="../assets/images/layout-1/product/7.jpg" className="img-fluid" alt="product" />
                                                                                </div>
                                                                                <div className="product-back">
                                                                                    <img src="../assets/images/layout-1/product/a7.jpg" className="img-fluid  " alt="product" />
                                                                                </div>
                                                                                <div className="product-icon">
                                                                                    <button onclick="openCart()" type="button" >
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
                                                                </div>
                                                            </div>
                                                            <div id="tab-3" className="tab-content">
                                                                <div className="product-slide-6 product-m no-arrow">
                                                                    <div>
                                                                        <div className="product-box">
                                                                            <div className="product-imgbox">
                                                                                <div className="product-front">
                                                                                    <img src="../assets/images/layout-1/product/7.jpg" className="img-fluid" alt="product" />
                                                                                </div>
                                                                                <div className="product-back">
                                                                                    <img src="../assets/images/layout-1/product/a7.jpg" className="img-fluid  " alt="product" />
                                                                                </div>
                                                                                <div className="product-icon">
                                                                                    <button onclick="openCart()" type="button" >
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
                                                                                    <img src="../assets/images/layout-1/product/8.jpg" className="img-fluid" alt="product" />
                                                                                </div>
                                                                                <div className="product-back">
                                                                                    <img src="../assets/images/layout-1/product/a8.jpg" className="img-fluid  " alt="product" />
                                                                                </div>
                                                                                <div className="product-icon">
                                                                                    <button onclick="openCart()" type="button" >
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
                                                                                            <img src="../assets/images/layout-1/product/1.jpg" className="img-fluid  " alt="product" />
                                                                                        </div>
                                                                                        <div className="product-back">
                                                                                            <img src="../assets/images/layout-1/product/a1.jpg" className="img-fluid  " alt="product" />
                                                                                        </div>
                                                                                                <div className="product-icon">
                                                                                                    <button onclick="openCart()" type="button" >
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
                                                                                                    <button onclick="openCart()" type="button" >
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
                                                                                                    <button onclick="openCart()" type="button" >
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
                                                                                                    <button onclick="openCart()" type="button" >
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
                                                                                                    <button onclick="openCart()" type="button" >
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
                                                                                                            <button onclick="openCart()" type="button" >
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
                                                                                        </div>
                                                                                    </div>
    <div id="tab-4" className="tab-content">
        <div className="product-slide-6 product-m no-arrow">
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
                            <button onclick="openCart()" type="button" >
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
                            <img src="../assets/images/layout-1/product/7.jpg" className="img-fluid" alt="product" />
                        </div>
                        <div className="product-back">
                            <img src="../assets/images/layout-1/product/a7.jpg" className="img-fluid  " alt="product" />
                        </div>
                        <div className="product-icon">
                            <button onclick="openCart()" type="button" >
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
                                    <img src="../assets/images/layout-1/product/8.jpg" className="img-fluid" alt="product" />
                                </div>
                                <div className="product-back">
                                    <img src="../assets/images/layout-1/product/a8.jpg" className="img-fluid  " alt="product" />
                                </div>
                                <div className="product-icon">
                                    <button onclick="openCart()" type="button" >
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
                                    <img src="../assets/images/layout-1/product/1.jpg" className="img-fluid  " alt="product" />
                                </div>
                                <div className="product-back">
                                    <img src="../assets/images/layout-1/product/a1.jpg" className="img-fluid  " alt="product" />
                                </div>
                                <div className="product-icon">
                                    <button onclick="openCart()" type="button" >
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
                                    <button onclick="openCart()" type="button" >
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
                                                <button onclick="openCart()" type="button" >
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
                                                <button onclick="openCart()" type="button" >
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
                                                <button onclick="openCart()" type="button" >
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
            </div>
        </div>
        <div id="tab-5" className="tab-content">
            <div className="product-slide-6 product-m no-arrow">
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
                                <button onclick="openCart()" type="button" >
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
                                        <button onclick="openCart()" type="button" >
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
                                        <img src="../assets/images/layout-1/product/7.jpg" className="img-fluid" alt="product" />
                                    </div>
                                    <div className="product-back">
                                        <img src="../assets/images/layout-1/product/a7.jpg" className="img-fluid  " alt="product" />
                                    </div>
                                            <div className="product-icon">
                                                <button onclick="openCart()" type="button" >
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
                                                <img src="../assets/images/layout-1/product/8.jpg" className="img-fluid" alt="product" />
                                            </div>
                                            <div className="product-back">
                                                <img src="../assets/images/layout-1/product/a8.jpg" className="img-fluid  " alt="product" />
                                            </div>
                                            <div className="product-icon">
                                                <button onclick="openCart()" type="button" >
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
                                                        <img src="../assets/images/layout-1/product/1.jpg" className="img-fluid  " alt="product" />
                                                    </div>
                                                    <div className="product-back">
                                                        <img src="../assets/images/layout-1/product/a1.jpg" className="img-fluid  " alt="product" />
                                                    </div>
                                                    <div className="product-icon">
                                                        <button onclick="openCart()" type="button" >
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
                                                        <button onclick="openCart()" type="button" >
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
                                                        <button onclick="openCart()" type="button" >
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
                                                        <button onclick="openCart()" type="button" >
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
                                    </div>
                                </div>
                                <div id="tab-6" className="tab-content">
                                    <div className="product-slide-6 product-m no-arrow">
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
                                                        <button onclick="openCart()" type="button" >
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
                                                        <button onclick="openCart()" type="button" >
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
                                                        <button onclick="openCart()" type="button" >
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
                                                        <img src="../assets/images/layout-1/product/7.jpg" className="img-fluid" alt="product" />
                                                    </div>
                                                    <div className="product-back">
                                                        <img src="../assets/images/layout-1/product/a7.jpg" className="img-fluid  " alt="product" />
                                                    </div>
                                                    <div className="product-icon">
                                                        <button onclick="openCart()" type="button" >
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
                                                        <img src="../assets/images/layout-1/product/8.jpg" className="img-fluid" alt="product" />
                                                    </div>
                                                    <div className="product-back">
                                                        <img src="../assets/images/layout-1/product/a8.jpg" className="img-fluid  " alt="product" />
                                                    </div>
                                                    <div className="product-icon">
                                                        <button onclick="openCart()" type="button" >
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
                                                        <img src="../assets/images/layout-1/product/1.jpg" className="img-fluid  " alt="product" />
                                                    </div>
                                                    <div className="product-back">
                                                        <img src="../assets/images/layout-1/product/a1.jpg" className="img-fluid  " alt="product" />
                                                    </div>
                                                    <div className="product-icon">
                                                        <button onclick="openCart()" type="button" >
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
                                                        <button onclick="openCart()" type="button" >
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
                                                        <button onclick="openCart()" type="button" >
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MediaTab;