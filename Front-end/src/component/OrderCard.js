import React from 'react'
import collection from '../assets/Img/Order/collection.jpg';

const OrderCard = () => {
    return (
        <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="card shadow">
                <img src={collection} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        <a href="/Items"> Card title </a>
                    </h5>
                    <p className="card-text small text-muted font-italic">
                        Some quick example text to build on the card title and makeup
                    </p>
                    <h3 className=" text-orange">$544</h3>

                    <ul className="list-inline small">
                        <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                        <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                        <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                        <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                        <li className="list-inline-item m-0"> <i className="bi bi-star-fill"></i> </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default OrderCard