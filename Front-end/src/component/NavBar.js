import React, { useEffect, useState } from "react";
import User from "../assets/Img/HomeImg/user.jpg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    setTimeout(() => {
      let logged = localStorage.getItem("loggeduser");
      if (logged) {
        setUser(JSON.parse(logged));
      } else {
        setUser(null);
        localStorage.removeItem("loggeduser");
      }
    }, 1000);
  }, [localStorage.getItem("loggeduser")]);

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggeduser");
    navigate("/Home");
  };

  return (
    <header className="p-1 bg-dark text-white fixed-top ">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/home"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <h1 className="px-4">Fit2Planet</h1>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/BlogPost" className="nav-link px-2 text-white">
                BLOG
              </a>
            </li>
            <li>
              <a href="/ORDER" className="nav-link px-2 text-white">
                ORDER
              </a>
            </li>
            <li>
              <a href="/BmiCal" className="nav-link px-2 text-white">
                BMI
              </a>
            </li>
            {!user && (
              <>
                <li>
                  <a href="/Login" className="nav-link px-2 text-white">
                    LOGIN
                  </a>
                </li>
                <li>
                  <a href="/Regester" className="nav-link px-2 text-white">
                    SIGN UP
                  </a>
                </li>
              </>
            )}
          </ul>

          <div className="d-flex justify-content-between col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ">
            <form className="col-10 col-lg-auto me-lg-3">
              <input
                type="search"
                className="form-control "
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            {user && (
              <div className="dropdown text-end">
                <a
                  href="#"
                  className=" text-white d-block link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={User}
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle me-2"
                  />
                </a>
                <ul
                  className="dropdown-menu text-small "
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <a className="dropdown-item " href="/UserDetails">
                      Admin
                    </a>
                  </li>
                  {user?.Role === "USER" ? (
                    <li>
                      <a className="dropdown-item " href="/UProfile">
                        Profile User
                      </a>
                    </li>
                  ) : (
                    <li>
                      <a className="dropdown-item " href="/CProfile">
                        Profile Coach
                      </a>
                    </li>
                  )}
                  {/* <li>
                    <a className="dropdown-item " href="/UProfile">
                      Profile User
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/CProfile">
                      Profile Coach
                    </a>
                  </li> */}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
