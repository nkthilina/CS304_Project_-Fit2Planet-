import React from 'react'

import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import OrderCard from '../component/OrderCard';

const Order = () => {
    return (
        <div>
            <NavBar></NavBar>

            <section className="py-5 mt-lg-5 ">
            <div className="container-lg">
                <div className="row g-5">

                    <div className="col-md-4 text-center">
                        <div className=" border-1 rounded-3 bg-light p-4">
                            <h4 className="py-3">SEARCH <span className="text-orange">HERE</span></h4>

                            <div className="sider-bar">
                                <div className="single-gd mb-5">

                                    <form action="#" method="post" className="search-trans-form">
                                        <div className="input-group input-group-lg mb-3 ">
                                            <input className="form-control" type="search" name="search"
                                                placeholder="Search here..." />
                                            <span className="input-group-text bg-dark text-light" id="basic-addon2">
                                                <i className="bi bi-search"></i>
                                            </span>
                                        </div>
                                    </form>

                                </div>

                                <div className="single-gd mb-5">
                                    <h4>Product <span className="text-orange">Categories</span></h4>
                                    <ul className="list-group ">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Accessories
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                                            Suits
                                            <span className="badge bg-primary rounded-pill">24</span>
                                        </li>
                                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                                            A third list item
                                            <span className="badge bg-primary rounded-pill">13</span>
                                        </li>
                                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                                            A third list item
                                            <span className="badge bg-primary rounded-pill">15</span>
                                        </li>
                                        <li className="list-group-item  d-flex justify-content-between align-items-center">
                                            A third list item
                                            <span className="badge bg-primary rounded-pill">12</span>
                                        </li>
                                    </ul>

                                </div>
                                <div className="single-gd mb-5">
                                    <h4>Filter by <span className="text-orange">Price</span></h4>
                                    <label htmlFor="customRange1" className="form-label">Example range</label>
                                    <input type="range" className="form-range" id="customRange1" />

                                </div>

                                <div className="single-gd mb-5">
                                    <h4>Discount </h4>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> 15% or More </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> 20% or More </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> 25% or More </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> 30% or More </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> 35% or More </label>
                                    </div>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault"> 40% or More </label>
                                    </div>
                                </div>

                                <div className="single-gd left-side mb-5">
                                    <h4>Customer Ratings</h4>

                                    <div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <span className="text-orange">5.0</span> </li>

                                        </ul>
                                        <ul className="list-inline">
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <span className="text-orange">5.0</span> </li>

                                        </ul>
                                        <ul className="list-inline">
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <span className="text-orange">5.0</span> </li>

                                        </ul>
                                        <ul className="list-inline">
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                                            <li className="list-inline-item m-0"> <span className="text-orange">5.0</span> </li>

                                        </ul>
                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="col-md-8 ">
                        <div className="row py-4 ">
                            <div className="col">
                                <h4>Showing All Results</h4>
                            </div>
                            <div className="col">
                                <select className="form-select mb-3" aria-label=".form-select-lg example">
                                    <option value="menu_order" selected="selected">Default Sorting</option>
                                    <option value="popularity">Sort by Popularity</option>
                                    <option value="rating">Sort by Average rating</option>
                                    <option value="date">Sort by latest</option>
                                    <option value="price">Sort by Price: low to high</option>
                                    <option value="price-desc">Sort by Price: high to low</option>
                                </select>

                            </div>
                        </div>
                        <div className="row g-3">

                            <OrderCard />
                            <OrderCard />
                            <OrderCard />

                            <OrderCard />
                            <OrderCard />
                            <OrderCard />

                            <OrderCard />
                            <OrderCard />
                            <OrderCard />

                        </div>

                        <div className="row my-5 pt-5">
                            <div className="btn-toolbar d-flex justify-content-end" role="toolbar"
                                aria-label="Toolbar with button groups">
                                <div className="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-light  text-primary">
                                        XX </button>
                                </div>
                                <div className="btn-group me-2" role="group" aria-label="Second group">
                                    <button type="button" className="btn btn-primary">1</button>
                                    <button type="button" className="btn btn-light">2</button>
                                    <button type="button" className="btn btn-light">3</button>
                                    <button type="button" className="btn btn-light">4</button>
                                    <button type="button" className="btn btn-light">5</button>
                                </div>
                                <div className="btn-group" role="group" aria-label="Third group">
                                    <button type="button" className="btn btn-light text-primary"> XX </button>
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

export default Order