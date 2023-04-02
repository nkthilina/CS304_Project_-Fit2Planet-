import React from 'react';
import NaveBar from '../component/NaveBar';
import Footer from '../component/Footer';
import BlogCard from '../component/BlogCard';

const BlogPost = () => {
    return (
        <div>
            <NaveBar />
            <section className="py-3 px-2 px-lg-4 bg-light mt-5">

                <div className="row gx-3 gy-3" data-masonry='{"percentPosition": true }'>

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

export default BlogPost;