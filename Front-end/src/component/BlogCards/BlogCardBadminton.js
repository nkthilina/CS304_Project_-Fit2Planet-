import React from 'react'
import Badminton from '../../assets/Img/Blog/Badminton.jpg';
const BlogCardBadminton = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card rounded-6 shadow-sm">
                <img src={Badminton} className="card-img-top rounded-t-6" alt="..." />
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


                    <h5 className="card-title ">Badminton</h5>
                    <p className="card-text ">Badminton is a fast-paced racket sport that can be played both indoors 
                    and outdoors. It requires agility, speed, and coordination, making it a great cardiovascular
                     workout. Badminton can be played in singles or doubles and is a popular sport worldwide.</p>

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

export default BlogCardBadminton