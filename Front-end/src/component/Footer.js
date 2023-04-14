import React from "react";
// import "./Footer.css";
// y
import {
  FaLocationArrow,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-light bg-dark">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-4">
            <h1 className="py-4"> Fit2Planet </h1>
            <p className="">
              Fit2Planet is an outstanding online sports scheduling software
              which gives solutions for small and medium-sized businesses of all
              types. We provide high-quality booking services for individuals as
              well as companies all over the world and help them to grow and
              prosper. Our reputable and secure appointment system is designed
              to make bookings easy and comfortable for both our users and their
              clients!
            </p>
          </div>
          <div className="col-md-8">
            <h1 className="py-4">
              WHY Fit2Planet
            </h1>
            {/* <h1 className="py-4">
              {" "}
              Special Offer All Branded Sandals are Flat 50% Discount{" "}
            </h1> */}
            <p className="">
            At Fit2Planet Fitness, we truly care about each and every client’s success. We’ll work with you to help you achieve your health and fitness goals. Personal training, nutritional plans, support, home workouts…we’ll stick with you through it all. Let’s do this…together.
            </p>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-4">
            <div className="">
              <FaFacebookF className="icon" />
              <FaGithub className="icon" />
              <FaInstagram className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <h4 className="mb-4"> USEFUL LINKS </h4>
            <div className="row">
              <div className="col-6">
                <p> Home </p>
                <p> Blog </p>
                <p> About </p>
                <p> Contact </p>
              </div>
              {/* <div className="col-6">
                <p> Home </p>
                <p> About </p>
                <p> Blog </p>
                <p> Contact </p>
              </div> */}
            </div>
          </div>
        

        <div className="col-md-4 mt-5">
          <h4 className="text-uppercase fw-bold mb-4">Contact</h4>
          <p>
            <FaLocationArrow className="FooterFa" /> Western Province
          </p>
          <p>
            <FaEnvelope className="FooterFa" />
            fit2planet@gmail.com
          </p>
          <p>
            <FaPhoneAlt className="FooterFa" /> + 94 766144248
          </p>
        </div>

        <div>
          <div className="text-center pb-1 mt-5">© 2023 Copyright:</div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
