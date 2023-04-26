import React, { useEffect } from "react";
import image1 from "../assets/Img/Blog/Personal_trainer_Lazor.jpg";
import image2 from "../assets/Img/Blog/Gym.jpg";
import image3 from "../assets/Img/Blog/fitness-room.jpg";
import image4 from "../assets/Img/Blog/Yoga.jpg";
import image5 from "../assets/Img/Blog/swimming.jpg";
import image6 from "../assets/Img/Blog/Badminton.jpg";
import image7 from "../assets/Img/Blog/golf.jpg";
import image8 from "../assets/Img/Blog/Sport_items.jpg";
import { FaHeart, FaAward, FaStudiovinari } from "react-icons/fa";

const Data = [
  {
    id: 1,
    image: image1,
    like: "6k",
    disLike: "1k",
    title: "Personal Trainer",
    description:
      "Personal trainers are fitness professionals who provide customized exercise and fitness plans to help individuals achieve their health and fitness goals. They work with clients of all ages and fitness levels, and their services can range from one-on-one sessions to group training. Personal trainers are knowledgeable about different types of exercises, nutrition, and injury prevention, and they use this knowledge to create tailored workout plans that address their clients' specific needs. They also provide guidance, motivation, and accountability to help their clients stay on track and reach their fitness goals. ",
  },
  {
    id: 2,
    image: image2,
    like: "5k",
    disLike: "1k",
    title: "Gym",
    description:
      "Gyms are facilities designed for people to engage in physical exercise and fitness activities. They offer a wide range of equipment, classes, and amenities to help individuals achieve their fitness goals, including strength training, cardio, group fitness classes, and personal training. Gyms can also provide a social environment for individuals to meet others with similar interests and goals.",
  },
  {
    id: 3,
    image: image3,
    like: "8k",
    disLike: "0.5k",
    title: "Fitness classes",
    description:
      "Fitness is a state of being physically healthy, active, and in shape. It involves engaging in regular physical activity, eating a balanced and nutritious diet, getting enough rest and sleep, and managing stress. Regular exercise is an essential part of maintaining physical fitness and can help improve cardiovascular health, build strength and endurance, and reduce the risk of chronic diseases. Fitness can also have mental and emotional benefits, such as reducing stress and anxiety, improving self-esteem and confidence, and promoting overall well-being. It is a lifelong journey that requires dedication, consistency, and a commitment to living a healthy lifestyle.",
  },
  {
    id: 4,
    image: image4,
    like: "7k",
    disLike: "1k",
    title: "Yoga classes",
    description:
      "Fitness is a state of being physically healthy, active, and in shape. It involves engaging in regular physical activity, eating a balanced and nutritious diet, getting enough rest and sleep, and managing stress. Regular exercise is an essential part of maintaining physical fitness and can help improve cardiovascular health, build strength and endurance, and reduce the risk of chronic diseases. Fitness can also have mental and emotional benefits, such as reducing stress and anxiety, improving self-esteem and confidence, and promoting overall well-being. It is a lifelong journey that requires dedication, consistency, and a commitment to living a healthy lifestyle.",
  },
  {
    id: 5,
    image: image5,
    like: "8k",
    disLike: "1k",
    title: "Swimming classes",
    description:
      "Swimming is a great form of exercise that engages multiple muscle groups and provides a low-impact workout. Whether you're doing laps in a pool or swimming in the ocean, the water provides resistance that challenges your body in a unique way. Swimming can improve cardiovascular health, build strength and endurance, and help reduce stress. So grab your swimsuit and dive in!",
  },
  {
    id: 6,
    image: image6,
    like: "4k",
    disLike: "1k",
    title: "Badminton classes",
    description:
      "Badminton is a fast-paced racket sport that can be played both indoors and outdoors. It requires agility, speed, and coordination, making it a great cardiovascular workout. Badminton can be played in singles or doubles and is a popular sport worldwide.",
  },
  {
    id: 7,
    image: image7,
    like: "6k",
    disLike: "1k",
    title: "Golf classes",
    description:
      "Golf is a precision club-and-ball sport played on a large outdoor course. Players aim to hit a ball into a series of holes with as few strokes as possible. Golf requires skill, strategy, and patience, making it a popular sport for all ages.",
  },
  {
    id: 8,
    image: image8,
    like: "10k",
    disLike: "2k",
    title: "Purchase Sport Items",
    description:
      "When it comes to purchasing sport items, it's important to consider your needs and budget. Researching and comparing prices from different retailers can help you find the best deals. You should also pay attention to the quality of the products you're interested in and read reviews from other customers. Don't be afraid to ask for advice from experienced athletes or coaches. Additionally, consider purchasing second-hand items or renting equipment to save money. Remember to take care of your sports gear to extend its lifespan and ensure your safety during exercise.",
  },
];

const BlogCard = () => {
  return (
    <div className="d-flex flex-wrap">
      {Data.map(({ id, image, like, disLike, title, description }) => (
        <div className="col-xl-3 col-lg-4 col-md-6 p-2" key={id}>
          <div className="card rounded-6 shadow-sm">
            <img src={image} className="card-img-top rounded-t-6" alt="..." />
            <div className="card-body py-0">
              <div className="border-bottom py-2 mb-2 ">
                <div className="row align-items-center">
                  <div className="col-8 d-flex">
                    <FaAward className="FooterFa fa-lg mt-2" />
                    <div className="mx-3">
                      <h6 className="m-0 p-0">
                        Fit2Planet <FaStudiovinari className="FooterFa fa-lg text-success" />
                      </h6>
                      <p className="m-0 p-0 text-muted small">
                        {" "}
                        <small>Great knowledge</small>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-end small ovel">
                    <FaHeart className="FooterFa fa-lg text-danger" />
                    <small className="text-danger"> {like} </small>
                    <FaHeart className="FooterFa fa-lg" />
                    <small> {disLike} </small>
                  </div>
                </div>
              </div>

              <h5 className="card-title "><a href="./Post">{title}</a></h5>
              <p className="card-text ">{description} </p>

              <div className="d-flex justify-content-between pb-0">
                <p className="card-text">
                  {" "}
                  <small className="text-muted ovel">Last </small>
                </p>
                <p className="card-text">
                  {" "}
                  <small className="text-muted ovel">updated </small>
                </p>
                <p className="card-text">
                  {" "}
                  <small className="text-muted ovel">3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;


