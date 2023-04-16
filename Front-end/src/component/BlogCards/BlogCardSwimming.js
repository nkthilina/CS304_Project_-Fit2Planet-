import React from 'react'
import Swimming from '../../assets/Img/Blog/swimming.jpg';
const BlogCardSwimming = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card rounded-6 shadow-sm">
                <img src={Swimming} className="card-img-top rounded-t-6" alt="..." />
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


                    <h5 className="card-title ">Swimming</h5>
                    <p className="card-text ">Swimming is a great form of exercise that engages multiple muscle 
                    groups and provides a low-impact workout. Whether you're doing laps in a pool or swimming in the
                     ocean, the water provides resistance that challenges your body in a unique way. Swimming can 
                     improve cardiovascular health, build strength and endurance, and help reduce stress. So grab
                      your swimsuit and dive in!</p>

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

export default BlogCardSwimming