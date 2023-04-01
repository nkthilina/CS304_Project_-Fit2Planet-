import React from 'react'

const SellCard = () => {
    return (
        <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="card shadow">
                <img src="/sell img/shop-11.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text small text-muted font-italic">
                        Some quick example text to build on the card title and makeup
                    </p>
                    <h3 class=" text-orange">$544</h3>

                    <ul class="list-inline small">
                        <li class="list-inline-item m-0"> <i class="bi bi-star-fill"></i> </li>
                        <li class="list-inline-item m-0"> <i class="bi bi-star-fill"></i> </li>
                        <li class="list-inline-item m-0"> <i class="bi bi-star-fill"></i> </li>
                        <li class="list-inline-item m-0"> <i class="bi bi-star-fill"></i> </li>
                        <li class="list-inline-item m-0"> <i class="bi bi-star-fill"></i> </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default SellCard