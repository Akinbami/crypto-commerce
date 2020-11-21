import React from 'react';


function CollectionBanner() {

    return (
        <section className="collection-banner section-pt-space">
            <div className="container-fluid">
                <div className="row collection2">
                    <div className="col-md-4">
                        <div className="collection-banner-main p-left">
                            <div className="collection-img">
                                <img src="../assets/images/layout-1/collection-banner/3.jpg" className="img-fluid bg-img " alt="banner" />
                            </div>
                                <div className="collection-banner-contain">
                                    <div>
                                        <h3>classic</h3>
                                        <h4>Wooden Chair</h4>
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
                        <div className="col-md-4">
                            <div className="collection-banner-main p-left">
                                <div className="collection-img">
                                    <img src="../assets/images/layout-1/collection-banner/4.jpg" className="img-fluid bg-img " alt="banner" />
                                </div>
                                    <div className="collection-banner-contain">
                                        <div>
                                            <h3>food</h3>
                                            <h4>Grocery Items</h4>
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
                            <div className="col-md-4">
                                <div className="collection-banner-main p-left">
                                    <div className="collection-img">
                                        <img src="../assets/images/layout-1/collection-banner/5.jpg" className="img-fluid bg-img  " alt="banner" />
                            </div>
                                        <div className="collection-banner-contain">
                                            <div>
                                                <h3>digital</h3>
                                                <h4>cctv camera</h4>
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
                            </div>
                        </div>
        </section>
)
}

export default CollectionBanner;