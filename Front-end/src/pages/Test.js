import React, { useState } from 'react'

const Test = () => {

	const [form, setForm] = useState({
		fname: '',
		lname: '',

	});

	const onChange = (e) => {
		const { value, name, type , checked } = e.target;
		setForm((state) => ({
			...state,
			[name]: type === 'checkbox' ? checked : value
		}))
		console.log(form);
	}

	const showData = () => {
		console.log('Name', form);
	}

	const onSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div>
			<form onSubmit={onSubmit}>

				<div className="form-outline mb-4">
					<input type="text" name='fname' className="form-control" onChange={onChange} value={form.fname} />
					<label className="form-label" >fname</label>
				</div>
				<div className="form-outline mb-4">
					<input type="text" name='lname' className="form-control" onChange={onChange} value={form.lname} />
					<label className="form-label" >lname</label>
				</div>

				<button type="submit" className="btn btn-primary btn-block mb-4" onClick={showData}>Sign in</button>



			</form>
		</div>
	)
}

export default Test