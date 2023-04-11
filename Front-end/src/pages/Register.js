import React from "react";

import UReg from "../component/UReg";
import CReg from "../component/CReg";

import "./Style.css";

const Register = () => {
  return (
    <section className="bg-color-gra bg-light pb-5">
      <div className="Regester-bg-img"></div>

      <div className="card float-card mx-md-auto shadow-5-strong rounded-3">
        <div className="card-body p-5">
          <h1 className="fw-bold mb-5"> Registration Form </h1>
          <div className="">
            <ul
              className="nav nav-pills nav-fill mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active border border-primary py-3 h2"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  {" "}
                  User{" "}
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link border border-primary py-3 h2"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  {" "}
                  Coach{" "}
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                {/* +++++++++++++++++ */}
                <UReg> </UReg>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                {/* +++++++++++++++++ */}
                <CReg> </CReg>
              </div>
            </div>
            <div class="col-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
