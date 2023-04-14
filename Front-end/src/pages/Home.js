import React from "react";

import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

import UserImg from "../assets/Img/HomeImg/user.jpg";
import PostImg from "../assets/Img/HomeImg/Single man.jpg";
import HelpClient from "../assets/Img/HomeImg/help_client.jpg";
import Supportive from "../assets/Img/HomeImg/supportive.jpg";
import Larzor from "../assets/Img/HomeImg/Larzor-Angelov.png";

import Carosal1 from "../assets/Img/HomeImg/Carosal/Carosal 1.jpg";
import Carosal2 from "../assets/Img/HomeImg/Carosal/Carosal 2.jpg";
import Carosal3 from "../assets/Img/HomeImg/Carosal/Carosal 3.jpg";
import Carosal4 from "../assets/Img/HomeImg/Carosal/Carosal 4.jpg";
import {
  FaUserAlt,
  FaDumbbell,
  FaClock,
  FaChild,
  FaSwimmer,
  FaTableTennis,
  FaGolfBall,
  FaShoppingCart,
  FaTrophy,
  FaHeartbeat,
  FaCalendarCheck,
} from "react-icons/fa";
import "./Style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="details">
      <NavBar />
      <section className="home-bg-img mt-5">
        <div className="container mt-10">
          <div className="row text-light ">
            <div className="col">
              <h1 className="display-2 ">Sports Scheduling Software</h1>
              <h3 className="">
                for gyms, personal trainers, yoga studios <br />
                and sports more ....
              </h3>
              <button
                type="submit"
                className="btn btn-md btn-light px-4 m-3"
                // disabled
              >
                <a href="/Regester" className="nav-link px-1 text-secondary">
                  GET A MEMBERSHIP
                </a>
              </button>
              <button
                type="submit"
                className="btn btn-secondary py-2 px-4"
                disabled
              >
                be excited
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container HomeWelcome">
        <div className="card ">
          <div className="card-body p-5 text-center shadow-lg">
            <h1 className="card-title p-3"> Cardio. Strength. Mobility </h1>
            {/* <h1 className="card-title p-3"> Coach. Care. Connect. </h1> */}
            {/* <h5 className="card-text p-3">
            Virtual Workouts • Health Coaching Advice • Community
            </h5> */}
            <h5 className="card-text p-3">
              This is what we do best. Every workout that you experience with
              Fit2Planet made from scratch under our fitness supervision.
            </h5>
            <button
              type="submit"
              className="btn btn-primary py-2 px-5 rounded-pill"
            >
              <a href="/Regester" className="nav-link px-1 text-white">
                Join
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="py-3 ">
        <div className="container p-5">
          <div className="row  justify-content-center align-items-center text-center g-0">
            <div className="col-md-3">
              <div className="card p-3 rounded-3 bg-light">
                <div className="card-body">
                  <h5 className="card-title"> FREE FITNESS CONSULTATION</h5>
                  <p className="card-text">
                    Through a short survey, and a movement assessment, the
                    Fit2Planet system will prescribe the perfect program to get
                    you started and on track to meet your fitness goals.
                  </p>
                  <h5 className="p-3 text-primary"></h5>
                  <a href="#" className="btn btn-primary rounded-pill">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 shadow-lg">
              <div className="card px-4 py-5  rounded-3 bg-light">
                <div className="card-body">
                  <h5 className="card-title"> GROUP WORKOUTS</h5>
                  <p className="card-text">
                    Full-body workouts are designed to build strength and
                    endurance, using the energy of a small group or team of
                    people around you and the expertise of the coach to maximize
                    your results.
                  </p>
                  <h5 className="p-3 text-primary">15$</h5>
                  <a href="#" className="btn btn-primary rounded-pill">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card p-3 rounded-3 bg-light">
                <div className="card-body">
                  <h5 className="card-title"> ONE-ON-ONE TRAINING </h5>
                  <p className="card-text">
                    One-on-one personalized workouts with your coach are
                    designed to make you stronger from the inside out.
                  </p>
                  <h5 className="p-3 text-primary">30$</h5>
                  <a href="#" className="btn btn-primary rounded-pill">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-md-6 text-center mb-5 mb-md-0">
              <img src={Larzor} alt="img-fluid" className="img-fluid rounded" />
            </div>
            <div className="col-md-6 ps-md-4">
              <h2 className="fw-bold py-2">WHY CHOOSE US?</h2>
              <h5 className=" text-muted">EXPERT COACHES </h5>
              <h5 className=" text-muted">
                TRAIN SMARTER AND FASTER THAN BEFORE
              </h5>
              <h5 className=" text-muted"> 1 FREE PROGRAM FOR NEW MEMBER</h5>
              <h5 className=" text-muted">RELIABLE PARTNERS</h5>
            </div>
          </div>

          <div className="row justify-content-between align-items-center mb-5 bg">
            <div className="col-md-6 ">
              <h2 className="fw-bold py-2">COMMUNITY COUNTS</h2>
              <h5 className=" text-muted">
                We know a positive attitude is everything. We work together to
                deliver results in a friendly, fun and supportive environment
                where everyone knows your name.
              </h5>
            </div>
            <div className="col-md-6 text-center mt-5 mt-md-0">
              <img
                src={Supportive}
                alt="img-fluid"
                className="img-fluid rounded"
              />
            </div>
          </div>

          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-md-6 text-center mb-5 mb-md-0">
              <img
                src={HelpClient}
                alt="img-fluid"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 ps-md-4">
              <h2 className="fw-bold py-2 ">Energy is for Everyone</h2>
              <h5 className=" text-muted">Help Clients Achieve Goals</h5>
              <h5 className=" text-muted">
                Believe in the power of a motivating group fitness community.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="carousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={Carosal1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Knowledge, Skill, & Hard Work</h5>
                <p>
                  Fitness is not just about lifting weights or running on a
                  treadmill. It requires a combination of knowledge, skill, and
                  hard work to achieve your goals and maintain a healthy
                  lifestyle.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Carosal2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Knowledge</h5>
                <p>
                  Knowledge is key when it comes to fitness. Knowing how to
                  exercise properly, understanding the science behind the
                  exercises, and having the right nutrition knowledge can help
                  you achieve your fitness goals safely and effectively. Without
                  knowledge, you may end up injuring yourself or not seeing the
                  results you desire.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Carosal3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Skill</h5>
                <p>
                  Skill is equally important. Whether it's lifting weights,
                  doing yoga, or running, mastering the proper technique and
                  form is crucial for maximizing your workouts and minimizing
                  your risk of injury. Improving your skill level takes time and
                  practice, but it's essential for achieving optimal results.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={Carosal4} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Hard Work</h5>
                <p>
                  Hard work is the foundation of any successful fitness journey.
                  Consistency, dedication, and effort are necessary to see
                  progress and maintain a healthy lifestyle. It takes discipline
                  to stick to a workout routine, push through challenges, and
                  overcome setbacks.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="py-5 services">
        <div className="container">
          <div className="mb-4 text-center">
            {/* <h1> Services </h1> */}
            <h1> Coach. Care. Connect. </h1>
            <p>Virtual Workouts • Health Coaching Advice • Community</p>
          </div>

          <div className="row text-center p-md-3">
            <div className="col-md-2" />
            <div className="col-md-2">
              <FaUserAlt className="fa" />
              <p>Personal trainers</p>
            </div>
            <div className="col-md-2">
              <FaDumbbell className="fa" />
              <p>Gyms</p>
            </div>
            <div className="col-md-2">
              <FaClock className="fa" />
              <p>Fitness classes</p>
            </div>
            <div className="col-md-2">
              <FaChild className="fa" />
              <p>Yoga classes</p>
            </div>
          </div>

          <div className="row text-center p-md-3">
            <div className="col-md-2" />
            <div className="col-md-2">
              <FaSwimmer className="fa" />
              <p>Swimming</p>
            </div>
            <div className="col-md-2">
              <FaTableTennis className="fa" />
              <p>Badminton</p>
            </div>
            <div className="col-md-2">
              <FaGolfBall className="fa" />
              <p>Golf classes</p>
            </div>
            <div className="col-md-2">
              <FaShoppingCart className="fa" />
              <p className="text-align-center">
                {" "}
                Purchase <br />
                sports items
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="HomeFeatures">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>

            <div className="col-md-6 ">
              <div className="row py-4">
                <div className="col-2">
                  <FaTrophy className="fa" />
                </div>
                <div className="col-10">
                  <h4>Certified Trainers</h4>
                  <p>Expert fitness guidance from certified trainers.</p>
                </div>
              </div>
              <div className="row py-4">
                <div className="col-2">
                  <FaHeartbeat className="fa" />
                </div>
                <div className="col-10">
                  <h4>Free Consultatnt</h4>
                  <p>Expert advice at no cost for fitness goals.</p>
                </div>
              </div>
              <div className="row py-4">
                <div className="col-2">
                  <FaCalendarCheck className="fa" />
                </div>
                <div className="col-10">
                  <h4>Flexible Time</h4>
                  <p>Customizable workouts for busy lifestyles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="p-5 bg-light">
        <div className="container">
          <div className=" text-center py-3">
            {/* <h1> Meet Our Users </h1> */}
            <h1> WHAT CLIENTS SAY </h1>
            <p className="">YOUR OPINIONS MATTER!</p>
            {/* <p className="">
            Few feedbacks of our fewest out of many satisfied customers.
            </p> */}
          </div>

          <div className="row g-5">
            <div className="col-md-4">
              <p className="review">
                "I began training at Sault Fitness in September 2016, knowing
                that I needed to make some lifestyle changes. At age 72, I am
                amazed at how well I am feeling today…."
                <br />
                <i className="bi bi-twitter"></i>
                <span className="testimonialsSpan">@Kin_Howland</span>
              </p>
              <img className="HomeTestimonialsImg" src={UserImg} />
            </div>
            <div className="col-md-4">
              <p className="review">
                "Since joining Fit2Planet Fitness in August 2016 and working
                with Mike, I have finally achieved long term success. I have
                lost 33 pounds and 5 inches off of my waist and, as a result, I
                am no longer taking blood pressure and cholesterol medicine."{" "}
                <br />
                <i className="bi bi-twitter"></i>
                <span className="testimonialsSpan">@Glenn_Sherman</span>
              </p>
              {/* <p className="review">
                Good site to know everything about fitness <br />
                <i className="bi bi-twitter"></i>
                <span className="testimonialsSpan">@username</span>
              </p> */}
              <img className="HomeTestimonialsImg" src={UserImg} />
            </div>
            <div className="col-md-4">
              <p className="review">
                "If you have the opportunity to train with Jared, you will see
                results that you didn't think were possible. Training with Jared
                is an amazing experience."
                <br />
                <i className="bi bi-twitter"></i>
                <span className="testimonialsSpan">@Mark_Bastian</span>
              </p>
              <img className="HomeTestimonialsImg" src={UserImg} />
            </div>
          </div>
        </div>
      </section>

      <section className=" p-5 text-center bg-light">
        <div className="container px-5">
          <h1 className="pb-5">Company Introduction</h1>
          <p>
            Fit2Planet is an outstanding online sports scheduling software which
            gives solutions for small and medium-sized businesses of all types.
            We provide high-quality booking services for individuals as well as
            companies all over the world and help them to grow and prosper. Our
            reputable and secure appointment system is designed to make bookings
            easy and comfortable for both our users and their clients!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
