import React from 'react'
import './Style.css'

const Regester = () => {
	return (
		<section className="bg-color-gra bg-light pb-5">
        <div className="Regester-bg-img" >
        </div>
       
        <div className="card float-card mx-md-auto shadow-5-strong rounded-3" >
            <div className="card-body p-5">

                <h1 className="fw-bold mb-5"> Registration Form </h1>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="inputPassword4"/>
                    </div>
                    
                    <div className="col-md-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Contact Number</label>
                        <input type="number" className="form-control" id="inputEmail4"/>
                    </div>
                    
                    <div className="row mt-4 mb-2">
                        <div className="col-md-4">
                            <label className="form-check-label" for="flexRadioDefault1">
                                Gender
                            </label>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2"
                            placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>

                    <div className="col-12 ">
                        <button type="submit" className="btn btn-primary px-5">
                            Sign up
                        </button>

                    </div>
                    <p className="text-center">
                        Lorem ipsum dolor sit consectetur adipisicing elit.
                    </p>




                </form>

            </div>
        </div>
    </section>
	)
}

export default Regester