import React from 'react';
import NaveBar from '../component/NaveBar';
import Footer from '../component/Footer';
import BlogCard from '../component/BlogCard';

const BlogPost = () => {
    return (
        <div>
            <NaveBar />
            <section className="py-5 mt-5 px-2 bg-light ">

                <div className="row gx-3 gy-3 mt-10" data-masonry='{"percentPosition": true }'>

                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
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