import React from "react";
import avatarImage from "../assets/Img/HomeImg/user.jpg";

const CoachCard = (prop) => {
  return (
    <div>
      <div>
        <section className="bg-light mt-5 ">
          <div className="container py-5 mt-10">
            <div className="row ">
              <div className="col-lg-4 mb-lg-0 mb-5">
                <div className="card py-3 border-primary shadow">
                  <div className="card-body text-center">
                    <img
                      src={avatarImage}
                      alt="avatar"
                      className=" rounded-circle img-fluid border border-3 border-primary p-1 profile-img"
                    />

                    <h3 className="my-3">
                      {prop.firstName} {prop.lastName}
                    </h3>
                    <p>Lorem ipsum dolor sit</p>
                    <p className="text-muted mb-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Praesentium animi vel labore, debitis quasi corporis
                      temporibus dignissimos id, voluptas ipsa, sequi dolore
                      aliquam amet aut iusto magnam ipsum.
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-outline-danger ms-1"
                      >
                        <a href="/UpdateForm">Edit</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card border-primary shadow">
                  <div className="card-body">
                    <div className="row ">
                      <div className="col-sm-3">
                        <h6>First Name</h6>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{prop.firstName}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row ">
                      <div className="col-sm-3">
                        <h6>Last Name</h6>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{prop.lastName}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row ">
                      <div className="col-sm-3">
                        <h6>Email</h6>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{prop.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row ">
                      <div className="col-sm-3">
                        <h6>Address</h6>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{prop.location}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row ">
                      <div className="col-sm-3">
                        <h6>Year of experience</h6>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{prop.yearOfExperience}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row ">
                      <div className="col-sm-3">
                        <h6>Certificates</h6>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{prop.certificates}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoachCard;
