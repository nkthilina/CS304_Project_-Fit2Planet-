import React from 'react';
import './Style.css'

const Login = () => {

	

	return (
		<div class="login-bg-img d-flex justify-content-center align-items-center" >

		
			<div class="card " >

				<div class="card-body p-5">
					<form className="needs-validation">
						<h2 class=" mb-5 text-center ">Login to Your Account</h2>

						<div class="form-floating mb-4">
							<input type="text" class="form-control is-valid" placeholder=" " />
							<label class="form-label" for="form3Example3"> Email address </label>
							<div class="valid-feedback">
								Looks good!
							</div>
						</div>

						<div class="form-floating mb-4">
							<input type="text" class="form-control is-valid" placeholder=" " />
							<label class="form-label" for="form3Example4"> Password </label>
							<div class="valid-feedback">
								Looks good!
							</div>
						</div>

						<div class="form-floating mb-5">
							<input type="text" class="form-control is-valid" placeholder=" " />
							<label class="form-label" for="form3Example4"> Password </label>
							<div class="valid-feedback">
								Looks good!
							</div>
						</div>

						<div class="d-grid mb-2">
							<button type="submit" class="btn btn-primary btn-block ">
								Sign up
							</button>
						</div>
						<p class="text-light">
							Lorem ipsum dolor sit consectetur adipisicing elit.
						</p>


					</form>
				</div>

			</div>


		</div>
	)
}

export default Login