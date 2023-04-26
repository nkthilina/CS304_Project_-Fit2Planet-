import React from "react";
import "./Style.css";
import Imgage01 from "../assets/Img/Purchase Pop up/dumbbel_set.jpg";
import Imgage02 from "../assets/Img/Purchase Pop up/Sport_items.jpg";
import Imgage03 from "../assets/Img/Purchase Pop up/dumbbel_&_Shaker.jpg";
import Imgage04 from "../assets/Img/Purchase Pop up/dumbbel_&_mat.jpg";
import Imgage05 from "../assets/Img/Purchase Pop up/dumbbel_&_shoes.jpg";

const Items = () => {
  return (
    <div>
      <>
        <section className="py-5 p-3 bg-light mt-5 mt-10">
          <div className="row">
            <div className="col-md-5">
              <img
                src={Imgage01}
                alt="img-fluid"
                className="img-fluid rounded"
              />
              <div className="row my-2 g-2">
                <div className="col">
                  <img
                    src={Imgage02}
                    alt="img-fluid"
                    className="img-fluid rounded items-img-size"
                  />
                </div>
                <div className="col">
                  <img
                    src={Imgage03}
                    alt="img-fluid"
                    className="img-fluid rounded items-img-size"
                  />
                </div>
                <div className="col">
                  <img
                    src={Imgage04}
                    alt="img-fluid"
                    className="img-fluid rounded items-img-size"
                  />
                </div>
                <div className="col">
                  <img
                    src={Imgage05}
                    alt="img-fluid"
                    className="img-fluid rounded items-img-size"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="alert alert-primary ">Enjoy our services</div>
              <p>
                Dumbbell Bracket Stable Durable Dumbbell Storage Rack Small
                Dumbbell PVC Holder Home Fitness Gym Equipment Accessories
              </p>
              <div className="alert alert-danger pb-0">
                <h5>LKR 2500</h5>
                <p>2000 75% off</p>
              </div>
              <div className="my-2">
                <p>Quantity:</p>
                <button className="btn btn-outline-warning rounded-pill h4">
                  {" "}
                  -.{" "}
                </button>
                <span> 1 </span>
                <button className="btn btn-outline-primary rounded-pill h4">
                  {" "}
                  +{" "}
                </button>
                <span className="text-muted">
                  {" "}
                  1 pieces at most per customer{" "}
                </span>
              </div>
              <p className="text-muted"> Free shipping over LKR 3,225 </p>
              <div className="">
                <button
                  type="button "
                  className="btn btn-success px-5 me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Buy Now
                </button>
                <button className="btn btn-warning px-5">Add to Cart</button>
              </div>
              <div className="row">
                <div className="col-md-6" />
              </div>
            </div>
          </div>
        </section>



        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered rounded-3">
            <div className="modal-content">
              <div className="modal-header ">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Shipping Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form className="row g-3 p-4">
                  <h4> Personal Infomation </h4>
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  {/* <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                  </div> */}
                  <div className="col-md-6">
                    <label className="form-label">Contact Number </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Zip
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        set as default shipping address
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mt-4 p-4">
                    <button
                      type="submit"
                      className="btn btn-warning rounded-pill px-5 me-2"
                    >
                      Confirm
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Items;
