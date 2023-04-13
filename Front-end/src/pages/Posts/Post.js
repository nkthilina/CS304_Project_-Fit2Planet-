import React from 'react'

import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer';
import image1 from "../../assets/Img/Blog/Personal_trainer_Lazor.jpg"
import image2 from "../../assets/Img/Blog/Personal_trainer.jpg"
import '.././Style.css'

const Post = () => {
    return (
        <div>
            <NavBar></NavBar>
            <section className="my-5 pt-5 bg-light ">
                <div className="container-md">

                    <div className="row">
                        <div className="col-lg-8">

                            <div className="card shadow">
                                <div className="card-body p-4">
                                    <div className="row align-items-center px-3 mb-2">
                                        <div className="col-8 d-flex">
                                            <img src={image1} className=" rounded-circle post-img" />
                                            <div className="mx-3">
                                                <h6 className="m-0 p-0">Fit2Planet<i className="bi bi-award-fill"></i></h6>
                                                <p className=" m-0 p-0 text-muted small"> <small>  </small> </p>
                                            </div>
                                        </div>
                                        {/* <div className="col-1 text-end bg-light p-2 border rounded-pill ">
                                            <i className="bi bi-heart-fill fa-lg text-danger"></i>
                                            <small> 10k </small>
                                        </div> */}
                                    </div>

                                    <div className="">
                                        <h1 className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                        <img src={image1} className="card-img-top rounded-3 pb-5" alt="..." />

                                        <p className="">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quo cupiditate
                                            harum aperiam quidem? Unde optio sapiente soluta dicta et odio nesciunt quisquam
                                            sit, reiciendis iure accusamus commodi quidem minus neque dolores dolor possimus qui
                                            maiores error consectetur ut voluptatibus. Optio, debitis. In natus officiis
                                            voluptates voluptas accusamus ducimus! Omnis.
                                        </p>
                                        <p className="">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum repellendus odit
                                            accusantium recusandae voluptatum magnam harum aspernatur animi amet autem. Sit
                                            quibusdam sequi ad omnis, minus, nesciunt est pariatur dolorem, corrupti maiores
                                            fugit cupiditate neque necessitatibus voluptas temporibus corporis! Assumenda
                                            nesciunt, saepe voluptatibus sapiente omnis id voluptas, nisi soluta sed, ex
                                            blanditiis reprehenderit molestiae vel aliquam ullam? Cupiditate eaque tempora
                                            totam. Sit aliquam vitae ipsam quia ut suscipit rem deleniti aperiam obcaecati
                                            delectus asperiores impedit expedita nostrum est doloremque animi, unde doloribus
                                            maiores dignissimos veniam rerum harum perferendis vel? Illo consequatur ad ipsum
                                            commodi, neque repudiandae cum error in accusantium.
                                        </p>
                                        <img src={image2} className="card-img-top rounded-3 pb-5" alt="..." />
                                        <p className="">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ipsum facilis
                                            deleniti ratione qui distinctio excepturi ad. Mollitia distinctio ratione quisquam a
                                            officiis. Voluptatibus cupiditate voluptatem delectus voluptates ipsum alias aperiam
                                            unde illo magni perferendis quis, quos repellendus? Tenetur culpa dolore odio
                                            corrupti eos quae itaque. Ut eligendi quas in fugit placeat facilis hic sapiente
                                            sequi quod, molestias ipsam voluptas quaerat similique quasi sunt aliquam doloribus
                                            vero cumque eius esse quae, odio, quam vel velit. Dolores aliquam consequuntur
                                            asperiores sapiente earum magni voluptatum, nesciunt reiciendis. Eveniet in
                                            accusamus corrupti iste ipsa modi ab consequatur quia suscipit voluptate, fuga
                                            dignissimos fugiat eos magnam saepe a dolore, aperiam maiores? Rem temporibus
                                            excepturi, officia ut blanditiis inventore laudantium esse animi? Earum, deleniti!
                                            Error, dolorum amet, provident a aut autem voluptatibus commodi itaque est quia ipsa
                                            porro! Nemo, dolorem itaque. Vitae, voluptate similique. Quae, illo. Ex tenetur ab
                                            alias atque quidem odio consequatur expedita officiis ipsum, nulla deserunt
                                            voluptatibus, culpa quod explicabo cumque iure cupiditate dignissimos reiciendis a
                                            adipisci debitis. Illum labore consequuntur ex ipsa, explicabo non eos nostrum ad
                                            officia autem voluptatem, cum, sunt expedita. Rerum quae, provident dignissimos
                                            deserunt minus dolore? Unde repellendus labore, porro repudiandae assumenda eaque?
                                            Ratione alias at id!
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between pb-4 ">
                                        <small className=" px-2 py-1 text-muted bg-light rounded-pill">Last </small>
                                        <small className=" px-2 py-1 text-muted bg-light rounded-pill">updated </small>
                                        <small className=" px-2 py-1 text-muted bg-light rounded-pill">3 mins ago </small>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="card shadow text-muted">
                                <div className="card-body">
                                    <h4>Recent Posts</h4>

                                    <div className="card my-4">
                                        <div className="row g-0">
                                            <div className="col-md-5">
                                                <img src={image1} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-4">
                                        <div className="row g-0">
                                            <div className="col-md-5">
                                                <img src={image1} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card my-4">
                                        <div className="row g-0">
                                            <div className="col-md-5">
                                                <img src={image1} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>


            <Footer></Footer>
        </div>
    )
}

export default Post