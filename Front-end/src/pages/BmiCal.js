import React from 'react'
import NaveBar from '../component/NaveBar';
import Footer from '../component/Footer';

const BmiCal = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <section className="Bmi-bg-color mt-5" >

                <div className="container py-5 h-100">

                    <div className="card rounded-5">
                        <div className="card-body ">
                            <div className="row">

                                <div className="col-lg-5 text-center py-5">
                                    <h1 className="mb-5"> BMI Calculator </h1>
                                    <form action="">
                                        <div className="row mb-3">

                                            <div className="col-12">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Age</h5>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Male</h5>
                                                    <input className="form-check-input h2" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault1" />

                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Fmale</h5>
                                                    <input className="form-check-input h2" type="radio" name="flexRadioDefault"
                                                        id="flexRadioDefault1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-6">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Height(Cm)</h5>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="  bg-light rounded-5 p-3">
                                                    <h5>Weight(Kg)</h5>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <div className=" border border-primary bg-light rounded-pill py-4 mx-5">
                                                    <h2 className="text-primary">20.50</h2>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <div className="d-grid px-5 py-3">
                                                    <button className="btn btn-lg btn-primary rounded-pill" type="button">Button</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-7 text-center py-5">
                                    <h3 className="mb-5">We are more than just a company</h3>
                                    <p className="small">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore illum
                                        laboriosam eaque repudiandae possimus vitae, impedit hic voluptatum laudantium
                                        iusto ut voluptatibus numquam quas nemo autem pariatur, sint quia odit a illo!
                                        Eius culpa, delectus labore, quo dicta eum reprehenderit, cum sunt sed deleniti
                                        accusantium! Earum laudantium at hic ipsa dolor id culpa ex voluptas consequatur
                                        voluptatibus, in qui omnis quis nihil quisquam voluptate impedit eligendi iure
                                        deleniti, nobis incidunt doloribus velit. At iusto distinctio minus saepe amet
                                        sint illo nisi explicabo neque molestias. Temporibus minima doloremque porro
                                        neque veniam? Voluptatem facilis deleniti numquam explicabo quae quia vero
                                        molestias?
                                    </p>
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

export default BmiCal