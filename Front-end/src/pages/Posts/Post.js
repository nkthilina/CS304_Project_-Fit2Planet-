import React from "react";

import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import image1 from "../../assets/Img/Blog/Personal_trainer_Lazor.jpg";
import image2 from "../../assets/Img/Blog/Personal_trainer.jpg";
import WellShaped from "../../assets/Img/Blog/Beautiful_lady.jpg";
import Larzor from "../../assets/Img/Blog/Lazar_Angelov.jpg";
import BestPosture from "../../assets/Img/Blog/Cathy_Pham.jpg";
import ".././Style.css";

const Post = () => {
  return (
    <div>
      <section className="my-5 pt-5 bg-light ">
        <div className="container-md">
          <div className="row">
            <div className="col-lg-8">
              <div className="card shadow">
                <div className="card-body p-4">
                  <div className="row align-items-center px-3 mb-2">
                    <div className="col-8 d-flex">
                      <img src={image1} className=" rounded-circle post-img" />
                      <div className="mx-3">
                        <h6 className="m-0 p-0">
                          Fit2Planet<i className="bi bi-award-fill"></i>
                        </h6>
                        <p className=" m-0 p-0 text-muted small">
                          {" "}
                          <small> </small>{" "}
                        </p>
                      </div>
                    </div>
                    {/* <div className="col-1 text-end bg-light p-2 border rounded-pill ">
                                            <i className="bi bi-heart-fill fa-lg text-danger"></i>
                                            <small> 10k </small>
                                        </div> */}
                  </div>

                  <div className="">
                    <h1 className="pb-4">Personal Trainers</h1>
                    <img
                      src={image1}
                      className="card-img-top rounded-3 pb-5"
                      alt="..."
                    />

                    <p className="">
                      Personal trainers are fitness professionals who provide
                      personalized coaching and guidance to individuals seeking
                      to improve their health and fitness. They design
                      customized exercise programs tailored to the individual's
                      goals, needs, and physical abilities, and provide support
                      and motivation to help clients stay on track. Personal
                      trainers also educate clients on proper exercise form and
                      technique, as well as nutrition and lifestyle habits to
                      enhance overall health and wellness. They play a crucial
                      role in helping clients achieve their fitness goals and
                      maintain a healthy lifestyle.
                    </p>
                    <p className="">
                      Personal trainers are fitness coaches who work with
                      individuals to create tailored exercise programs. They
                      provide motivation, accountability, and injury prevention
                      advice to help clients reach their fitness goals.
                    </p>
                    <img
                      src={image2}
                      className="card-img-top rounded-3 pb-5"
                      alt="..."
                    />
                    <p className="">
                      Personal trainers are professionals who work one-on-one
                      with clients to help them achieve their fitness goals.
                      They are knowledgeable about a variety of exercise
                      techniques and equipment, and can customize workouts to
                      fit the specific needs and preferences of their clients.
                      In addition to providing exercise guidance, personal
                      trainers can also serve as a source of motivation and
                      accountability, helping clients stay on track and push
                      past plateaus. They may also provide guidance on injury
                      prevention and rehabilitation, making them an important
                      resource for those with health concerns or injuries.
                      Overall, personal trainers provide a valuable service to
                      individuals looking to improve their fitness and overall
                      health.
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pb-4 ">
                    <small className=" px-2 py-1 text-muted bg-light rounded-pill">
                      Last{" "}
                    </small>
                    <small className=" px-2 py-1 text-muted bg-light rounded-pill">
                      updated{" "}
                    </small>
                    <small className=" px-2 py-1 text-muted bg-light rounded-pill">
                      3 mins ago{" "}
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow text-muted">
                <div className="card-body">
                  <h4>Recent Posts</h4>

                  <div className="card my-4">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src={WellShaped}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">Get into shape</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src={Larzor}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">Best physique</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card my-4">
                    <div className="row g-0">
                      <div className="col-md-5">
                        <img
                          src={BestPosture}
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title">Correct posture</h5>
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
    </div>
  );
};

export default Post;
