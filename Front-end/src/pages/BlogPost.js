import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import BlogCard from "../component/BlogCard";
import BlogCardPersonalTrainer from "../component/BlogCards/BlogCardPersonalTrainer";
import BlogCardGyms from "../component/BlogCards/BlogCardGyms";
import BlogCardFitnessClasses from "../component/BlogCards/BlogCardFitnessClasses";
import BlogCardYogaClasses from "../component/BlogCards/BlogCardYogaClasses";
import BlogCardSwimming from "../component/BlogCards/BlogCardSwimming";
import BlogCardGolfClasses from "../component/BlogCards/BlogCardGolfClasses";
import BlogCardBadminton from "../component/BlogCards/BlogCardBadminton";
import BlogCardPurchase from "../component/BlogCards/BlogCardPurchase";

const BlogPost = () => {
  return (
    <div>
      <section className="py-5 mt-5 px-2 bg-light ">
        <div
          className="row gx-3 gy-3"
          data-masonry='{"percentPosition": true }'
        >
          <BlogCardPersonalTrainer />
          <BlogCardGyms />
          <BlogCardFitnessClasses />
          <BlogCardYogaClasses />
          <BlogCardSwimming />
          <BlogCardBadminton />
          <BlogCardGolfClasses />
          <BlogCardPurchase />
          {/* <BlogCard /> */}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
