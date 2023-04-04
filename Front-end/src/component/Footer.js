import React from 'react'

const Footer = () => {
	return (
		<footer className="py-5 text-light bg-dark">
			<div className="container py-4">
				<div className="row">
					<div className="col-md-4">
						<h2 className="py-4"> SPRYSTORE </h2>
						<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia cumque
							cupiditate delectus rerum vel ullam quas, ea explicabo vero, ad eaque a, magni nam amet!
							Distinctio a ea nulla!</p>
					</div>
					<div className="col-md-8">
						<h1 className="py-4"> Special Offer All Branded Sandals are Flat 50% Discount </h1>
						<p className="">Lorem upiditate delectus rerum vel ullam quas, ea explicabo vero, ad eaque a, magni
							nam amet! Distinctio a ea nulla!</p>

					</div>
				</div>
				<div className="row py-4">
					<div className="col-md-4">
						<div className="">
							<i className="bi bi-facebook h2 pe-4"></i>
							<i className="bi bi-github h2 pe-4"></i>
							<i className="bi bi-instagram h2 pe-4"></i>
							<i className="bi bi-linkedin h2 pe-4"></i>
						</div>
					</div>
					<div className="col-md-4">
						<h4> USEFUL LINKS </h4>
						<div className="row">
							<div className="col-6">
								<p> Home </p>
								<p> About </p>
								<p> Blog </p>
								<p> Contact </p>
							</div>
							<div className="col-6">
								<p> Home </p>
								<p> About </p>
								<p> Blog </p>
								<p> Contact </p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<h4> OUR STORE </h4>
						<address>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae!
						</address>
					</div>
				</div>



			</div>
		</footer>
	)
}

export default Footer