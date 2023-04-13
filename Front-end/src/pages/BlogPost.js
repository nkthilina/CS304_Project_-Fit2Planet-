import React from 'react';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import BlogCard from '../component/BlogCard';
import BlogCardPersonalTrainer from '../component/BlogCards/BlogCardPersonalTrainer'

const BlogPost = () => {
    return (
        <div>
            <NavBar />
            <section className="py-5 mt-5 px-2 bg-light ">

                <div className="row gx-3 gy-3" data-masonry='{"percentPosition": true }'>

                    <BlogCardPersonalTrainer />
                    <BlogCard />
                    <BlogCardPersonalTrainer />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />


                </div>


            </section>
            <Footer />
        </div>
    )
}

export default BlogPost