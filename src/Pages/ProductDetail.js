import Header from '../Components/Header';

import SpecialProduct from '../Components/SpecialProduct';
import { Link } from 'react-router-dom';
import ProductDetailImage from '../Components/ProductDetailImage';
import data from '../Components/data';



function ProductDetail(props) {
    const product = data.products.find(x=>x.id==props.match.params.id);
    return (
        <div className="Detail">
            <Header />
            <div className="breadcrumb-main ">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumb-contain">
                                <div>
                                    <h2>product</h2>
                                    <ul>
                                        <li><Link to="/">home</Link></li>
                                        <li><i className="fa fa-angle-double-right"></i></li>
                                        <li><Link to="/">product</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductDetailImage product={product} />

            <section className="tab-product tab-exes ">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <div className="creative-card creative-inner">
                                <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                                    <li className="nav-item"><a className="nav-link active" id="top-home-tab" data-toggle="tab" href="#top-home" role="tab" aria-selected="true">Description</a>
                                        <div className="material-border"></div>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" id="profile-top-tab" data-toggle="tab" href="#top-profile" role="tab" aria-selected="false">Details</a>
                                        <div className="material-border"></div>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" id="contact-top-tab" data-toggle="tab" href="#top-contact" role="tab" aria-selected="false">Video</a>
                                        <div className="material-border"></div>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" id="review-top-tab" data-toggle="tab" href="#top-review" role="tab" aria-selected="false">Write Review</a>
                                        <div className="material-border"></div>
                                    </li>
                                </ul>
                                <div className="tab-content nav-material" id="top-tabContent">
                                    <div className="tab-pane fade show active" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                    <div className="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <div className="single-product-tables">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Febric</td>
                                                        <td>Chiffon</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Color</td>
                                                        <td>Red</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Material</td>
                                                        <td>Crepe printed</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Length</td>
                                                        <td>50 Inches</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Size</td>
                                                        <td>S, M, L .XXL</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                                        <div className="mt-4 text-center">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="top-review" role="tabpanel" aria-labelledby="review-top-tab">
                                        <form className="theme-form">
                                            <div className="form-row">
                                                <div className="col-md-12">
                                                    <div className="media">
                                                        <label>Rating</label>
                                                        <div className="media-body ml-3">
                                                            <div className="rating three-star"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="name">Name</label>
                                                    <input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="email">Email</label>
                                                    <input type="text" className="form-control" placeholder="Email" required />
                                                </div>
                                                <div className="col-md-12">
                                                    <label for="review">Review Title</label>
                                                    <input type="text" className="form-control" placeholder="Enter your Review Subjects" required />
                                                </div>
                                                <div className="col-md-12">
                                                    <label for="review">Review Title</label>
                                                    <textarea className="form-control" placeholder="Wrire Your Testimonial Here" id="exampleFormControlTextarea1" rows="6"></textarea>
                                                </div>
                                                <div className="col-md-12">
                                                    <button className="btn btn-normal" type="submit">Submit YOur Review</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="section-big-py-space  ratio_asos bg-light">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-12 product-related">
                            <h2>related products</h2>
                        </div>
                    </div>
                    <SpecialProduct />
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;
