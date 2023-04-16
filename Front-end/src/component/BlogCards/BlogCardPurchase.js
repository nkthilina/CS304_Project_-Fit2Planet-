import React from 'react'
import Purchase from '../../assets/Img/Blog/Sport_items.jpg';
const BlogCardPurchase = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card rounded-6 shadow-sm">
                <img src={Purchase} className="card-img-top rounded-t-6" alt="..." />
                <div className="card-body py-0">
                    <div className="border-bottom py-2 mb-2 ">
                        <div className="row align-items-center">
                            <div className="col-9 d-flex">
                                <img src="img/img 1.jpg" className=" proimg " alt="..." />
                                <div className="mx-3">
                                    <h6 className="m-0 p-0">Fit2Planet <i className="bi bi-award-fill"></i></h6>
                                    <p className=" m-0 p-0 text-muted small"> <small> asasdasd </small> </p>
                                </div>
                            </div>
                            <div className="col-3 text-end small ovel">
                                <i className="bi bi-heart fa-lg"></i>
                                <i className="bi bi-heart-fill fa-lg text-danger"></i>
                                <small> 10k </small>
                            </div>
                        </div>
                    </div>


                    <h5 className="card-title ">Purchase</h5>
                    <p className="card-text ">When it comes to purchasing sport items, it's important to consider your 
                    needs and budget. Researching and comparing prices from different retailers can help you find the
                     best deals. You should also pay attention to the quality of the products you're interested in and 
                     read reviews from other customers. Don't be afraid to ask for advice from experienced athletes 
                     or coaches. Additionally, consider purchasing second-hand items or renting equipment to save money. 
                     Remember to take care of your sports gear to extend its lifespan and ensure your safety during exercise.</p>

                    <div className="d-flex justify-content-between pb-0">
                        <p className="card-text"> <small className="text-muted ovel">Last </small></p>
                        <p className="card-text"> <small className="text-muted ovel">updated </small></p>
                        <p className="card-text"> <small className="text-muted ovel">3 mins ago</small></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCardPurchase