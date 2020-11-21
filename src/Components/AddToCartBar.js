
function AddToCartBar() {
    return (
        <div id="cart_side" className=" add_to_cart bottom ">
            <a href="javascript:void(0)" className="overlay" onclick="closeCart()"></a>
            <div className="cart-inner">
                <div className="cart_top">
                    <h3>my cart</h3>
                    <div className="close-cart">
                        <a href="javascript:void(0)" onclick="closeCart()">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="cart_media">
                    <ul className="cart_product">
                        <li>
                            <div className="media">
                                <a href="#">
                                    <img alt="" className="mr-3" src="../assets/images/layout-1/product/1.jpg" />
                                </a>
                                <div className="media-body">
                                    <a href="#">
                                        <h4>item name</h4>
                                    </a>
                                    <h4>
                                        <span>1 x $ 299.00</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="close-circle">
                                <a href="#">
                                    <i className="ti-trash" aria-hidden="true"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="media">
                                <a href="#">
                                    <img alt="" className="mr-3" src="../assets/images/layout-1/product/2.jpg" />
                                </a>
                                <div className="media-body">
                                    <a href="#">
                                        <h4>item name</h4>
                                    </a>
                                    <h4>
                                        <span>1 x $ 299.00</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="close-circle">
                                <a href="#">
                                    <i className="ti-trash" aria-hidden="true"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="media">
                                <a href="#"><img alt="" className="mr-3" src="../assets/images/layout-1/product/3.jpg" /></a>
                                <div className="media-body">
                                    <a href="#">
                                        <h4>item name</h4>
                                    </a>
                                    <h4><span>1 x $ 299.00</span></h4>
                                </div>
                            </div>
                            <div className="close-circle">
                                <a href="#">
                                    <i className="ti-trash" aria-hidden="true"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul className="cart_total">
                        <li>
                            <div className="total">
                                <h5>subtotal : <span>$299.00</span></h5>
                            </div>
                        </li>
                        <li>
                            <div className="buttons">
                                <a href="cart.html" className="btn btn-normal btn-xs view-cart">view cart</a>
                                <a href="#" className="btn btn-normal btn-xs checkout">checkout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AddToCartBar;