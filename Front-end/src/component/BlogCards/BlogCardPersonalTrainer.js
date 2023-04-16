import React from 'react'
import PersonalTrainer from '../../assets/Img/Blog/Personal_trainer_Lazor.jpg';
const BlogCardPersonalTrainer = () => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card rounded-6 shadow-sm">
                <img src={PersonalTrainer} className="card-img-top rounded-t-6" alt="..." />
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


                    <h5 className="card-title ">Personal Trainers</h5>
                    <p className="card-text ">Personal trainers are fitness professionals who provide customized exercise and 
                    fitness plans to help individuals achieve their health and fitness goals. They work with clients of all ages and 
                    fitness levels, and their services can range from one-on-one sessions to group training. Personal trainers 
                    are knowledgeable about different types of exercises, nutrition, and injury prevention, and they use this 
                    knowledge to create tailored workout plans that address their clients' specific needs. They also provide guidance, 
                    motivation, and accountability to help their clients stay on track and reach their fitness goals. </p>

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

export default BlogCardPersonalTrainer