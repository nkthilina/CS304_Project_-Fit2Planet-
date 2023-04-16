import React from 'react'
import FitnessClasses from '../../assets/Img/Blog/fitness-room.jpg';
const BlogCardFitnessClasses = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card rounded-6 shadow-sm">
                <img src={FitnessClasses} className="card-img-top rounded-t-6" alt="..." />
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


                    <h5 className="card-title ">Fitness classes</h5>
                    <p className="card-text ">Fitness is a state of being physically healthy, active, and in shape. 
                    It involves engaging in regular physical activity, eating a balanced and nutritious diet, 
                    getting enough rest and sleep, and managing stress. Regular exercise is an essential part of 
                    maintaining physical fitness and can help improve cardiovascular health, build strength and endurance, 
                    and reduce the risk of chronic diseases. Fitness can also have mental and emotional benefits, 
                    such as reducing stress and anxiety, improving self-esteem and confidence, and promoting 
                    overall well-being. It is a lifelong journey that requires dedication, consistency, and a 
                    commitment to living a healthy lifestyle.</p>

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

export default BlogCardFitnessClasses