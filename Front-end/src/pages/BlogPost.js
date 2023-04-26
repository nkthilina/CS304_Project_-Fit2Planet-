import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import BlogCardArray from "../component/BlogCardArray";

const BlogPost = () => {
  return (
    <div>
      <section className="py-5 mt-5 px-2 bg-light ">
        <div
          className="row gx-3 gy-3"
          data-masonry='{"percentPosition": true }'
        >
          <BlogCardArray />
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
