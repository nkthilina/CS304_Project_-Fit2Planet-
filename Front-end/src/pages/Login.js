import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Style.css'

const Login = () => {

	const initialValues = { email: "", password: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const initialError = { email: 'Email is required!', password: 'Password is required' };
	const [formErrors, setFormErrors] = useState(initialError);
	const [isSubmit, setIsSubmit] = useState(false);

	useEffect( () => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
		}
	}, [formErrors]);


	function handleChange(params) {
		const { name, value } = params.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(formValues);
	}

	function handleSubmit(params) {
		params.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	}

	function validate(values) {
		const errors = {};
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

		if (!values.email) {
			errors.email = "Email is required!";

		} else if (!emailRegex.test(values.email)) {
			errors.email = "not a valid email";
		}
		if (!values.password) {
			errors.password = "Password is required";
		} else if (values.password.length <= 4) {
			errors.password = "Password must be more than 4 characters";
		}
		return errors;

	}



	return (
		<div className="login-bg-img d-flex justify-content-center align-items-center" >


			<div className="card " >

				<div className="card-body p-5">
					<form className="needs-validation" onChange={handleSubmit}>
						<h2 className=" mb-5 text-center ">LogIn to your account</h2>

						<div className="form-floating mb-4">
							<input type="email" className={`form-control ${!formErrors.email ? 'is-valid' : 'is-invalid'}`} placeholder=" " name="email" value={formValues.email} onChange={handleChange} />
							<label className="form-label" htmlFor="form3Example3"> Email address </label>
							<div className="text-danger">
								{formErrors.email}
							</div>
						</div>

						<div className="form-floating mb-4">
							<input type="Password" className={`form-control ${!formErrors.password ? 'is-valid' : 'is-invalid'}`} placeholder=" " name="password" value={formValues.password} onChange={handleChange} />
							<label className="form-label" htmlFor="form3Example4"> Password </label>
							<div className="text-danger">
								{formErrors.password}
							</div>
						</div>
						<div className='form-group-mb-2'>
							<input type="checkbox" className='form-check-input' />
							<label htmlFor="check" className='form-check-label1'>Remember me</label>
						</div>
						<div className="d-grid mb-2">
							<button type="submit" className="btn btn-primary btn-block ">
								Log In
							</button>
						</div>
						<p className="text-secondary">
							Don't have an account. <Link to={"/Regester"}>Sign Up</Link> here
							
						</p>


					</form>
				</div>

			</div>


		</div>
	)
}

export default Login