import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CReg = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
  const [yearOfExperience, setYearOfExperience] = useState("");
  const [certificates, setCertificates] = useState("");

  async function save(event) {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        await axios.post("http://localhost:8080/api/v1/coach/add", {
          firstName: firstName,
          lastName: lastName,
          age: age,
          gender: gender,
          email: email,
          password: password,
          mobileNumber: mobileNumber,
          location: location,
          yearOfExperience: yearOfExperience,
          certificates: certificates,
        });
        alert("Coach registered successfully.");
        setFirstName("");
        setLastName("");
        setAge("");
        setGender("");
        setEmail("");
        setPassword("");
        setMobileNumber("");
        setLocation("");
        setYearOfExperience("");
        setCertificates("");
      } catch (err) {
        alert("Coach registration failed.");
      }
    } else {
      window.alert("done");
    }
  }
  console.log(firstName);

  // const [formValues, setFormValues] = useState(
  //     {
  //         firstName: "",
  //         lastName: "",
  //         age: "",
  //         gender: "",
  //         email: "",
  //         password: "",
  //         rpassword: "",
  //         CNumber: "",
  //         address: "",
  //         YearOfExperience: "",

  //     }
  // );

  // const [formErrors, setFormErrors] = useState(
  //     {
  //         firstName: " first Name required ",
  //         lastName: " last Name required ",
  //         age: " age required ",
  //         gender: " gender required ",
  //         email: " email required ",
  //         password: " password required ",
  //         rpassword: "reenter Password required ",
  //         CNumber: " Contact Number required ",

  //     }
  // );
  // const [isSubmit, setIsSubmit] = useState(false);

  // function handleChange(params) {
  //     const { name, value, type, checked } = params.target;
  //     setFormValues({
  //         ...formValues,
  //         [name]: type === 'checkbox' ? checked : value
  //     });
  //     setFormErrors(validate(formValues));
  // }

  // function onSubmit(params) {
  //     params.preventDefault();
  //     setIsSubmit(true);
  //     console.log(formValues);
  // }

  // useEffect(() => {
  //     // console.log(formErrors);
  //     if (Object.keys(formErrors).length === 0 && isSubmit) {
  //         console.log(formValues);
  //     }
  // }, [formErrors]);

  // function validate(values) {
  //     const errors = {};
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //     const CNumberRegex = /^\d{10}$/;

  //     if (!values.email) {
  //         errors.email = "Email is required!";

  //     } else if (!emailRegex.test(values.email)) {
  //         errors.email = "not a valid email";
  //     }

  //     if (!values.password) {
  //         errors.password = "Password is required";
  //     } else if (values.password.length <= 4) {
  //         errors.password = "Password must be more than 4 characters";
  //     }

  //     if (!values.rpassword) {
  //         errors.rpassword = "rPassword is required";
  //     }

  //     if (values.rpassword !== values.password) {
  //         errors.rpassword = "rpassword Not Match";
  //         console.log(values.password)
  //         console.log(values.rpassword)
  //     }

  //     if (!values.firstName) {
  //         errors.firstName = "firstName is required!";

  //     }
  //     if (!values.lastName) {
  //         errors.lastName = "lastName is required!";

  //     }
  //     if (!values.age) {
  //         errors.age = "age is required!";

  //     } else if (!values.age.length <= 3) {
  //         errors.age = "not a valid age ";
  //     }

  //     if (!values.gender) {
  //         errors.gender = "gender is required!";

  //     }
  //     if (!values.CNumber) {
  //         errors.CNumber = "CNumber is required!";
  //     } else if (!CNumberRegex.test(values.CNumber)) {
  //         errors.CNumber = "not a valid Contact Number";
  //     }

  //     if (!values.certificates) {
  //         errors.certificates = "certificates is required!";
  //     }

  //     return errors;

  // }

  return (
    <form className="row g-3 needs-validation">
      <div className="col-md-6 form-group was-validated mb-2">
        <label htmlFor="UFName" className="form-label">
          {" "}
          First name{" "}
        </label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter your first name</div>
      </div>
      <div className="col-md-6 form-group was-validated mb-2">
        <label htmlFor="ULName" className="form-label">
          {" "}
          Last name{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="ULName"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter your last name</div>
      </div>
      <div className="col-md-6 form-group was-validated mb-2">
        <label htmlFor="UAge" className="form-label">
          {" "}
          Age{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="UAge"
          name="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter your age</div>
      </div>

      <div className="col-md-6">
        <div className="row mt-md-4 pt-md-3">
          <div className="col-md-4">
            <label className="form-check-label">Gender</label>
          </div>
          <div className="col-md-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              <label className="form-check-label">Male</label>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>
        {/* <div className="text-danger">{gender}Please select gender</div> */}
      </div>
      <div className="col-md-6 form-group was-validated mb-2">
        <label htmlFor="UEmail" className="form-label">
          {" "}
          Email{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="UEmail"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter a valid email</div>
      </div>
      <div className="col-md-6 form-group was-validated mb-2">
        <label htmlFor="UPassword" className="form-label">
          {" "}
          Password{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="UPassword"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter a password</div>
      </div>
      <div className="col-md-6 form-group was-validated mb-2">
        <label htmlFor="UConfirmPassword" className="form-label">
          {" "}
          Confirm Password{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="UConfirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please confirm password</div>
      </div>
      <div className="col-md-6 form-group was-validated mb-2">
        <label htmlFor="UContactNumber" className="form-label">
          {" "}
          Contact Number{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="UContactNumber"
          name="contactNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter your contact number</div>
      </div>
      <div className="col-md-12 form-group was-validated mb-2">
        <label htmlFor="UAddress" className="form-label">
          {" "}
          Address{" "}
        </label>
        <textarea
          className="form-control"
          rows="3"
          id="UAddress"
          name="address"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter your location</div>
      </div>
      <div className="col-md-6 form-group was-validated mb-2">
        <label htmlFor="UYearOfExperience" className="form-label">
          {" "}
          Years Of Experience{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="UYearOfExperience"
          name="yearOfExperience"
          value={yearOfExperience}
          onChange={(event) => setYearOfExperience(event.target.value)}
          required
        />
        <div className="invalid-feedback">
          Please enter your years of experience
        </div>
      </div>
      <div className="col-md-12 form-group was-validated mb-2">
        <label htmlFor="UCertificates" className="form-label">
          {" "}
          Certificates{" "}
        </label>
        <textarea
          className="form-control"
          rows="3"
          id="UCertificates"
          name="certificates"
          value={certificates}
          onChange={(event) => setCertificates(event.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter your certificates</div>
      </div>
      {/* //     <div className="col-md-12">
        //         <label className="form-label">Address</label>
        //         <textarea className="form-control" rows="3" name="address" value={formValues.address} onChange={handleChange}></textarea>
        //         <div className="text-danger">
        //             {formErrors.address}
        //         </div>
        //     </div> */}
{/* <div className="col-12">
<div className="form-check mb-3">
  <input
    type="checkbox"
    className="form-check-input"
    id="validationFormCheck1"
    required=""
  />
  <label className="form-check-label" htmlFor="validationFormCheck1">
    Check this checkbox
  </label>
  <div className="invalid-feedback">Example invalid feedback text</div>
</div>
</div> */}



<div className="col-12">
  <div className="form-check">
    <input
      className="form-check-input is-invalid"
      type="checkbox"
      defaultValue=""
      id="invalidCheck3"
      aria-describedby="invalidCheck3Feedback"
      required=""
    />
    <label className="form-check-label" htmlFor="invalidCheck3">
      Agree to terms and conditions
    </label>
    <div id="invalidCheck3Feedback" className="invalid-feedback">
      You must agree before sign up.
    </div>
  </div>
</div>


      <div className="col-12 ">
        <button type="submit" className="btn btn-primary px-5" onClick={save}>
          Sign up
        </button>
        <label className="text-center p-2">
          have and account.{" "}
          <Link to={"/Login"}>Login</Link> here
        </label>
      </div>
    </form>

    // <form className="row g-3 needs-validation" onChange={onSubmit}>

    //     <div className="col-md-6">
    //         <label htmlFor="UFName" className="form-label"> First name </label>
    //         <input type="text" className={`form-control ${!formErrors.firstName ? 'is-valid' : 'is-invalid'}`} id="UFName"
    //             name="firstName" value={formValues.firstName} onChange={handleChange} />
    //         <div className="text-danger">
    //             {formErrors.firstName}
    //         </div>
    //     </div>
    //     <div className="col-md-6">
    //         <label htmlFor="USName" className="form-label"> Last name </label>
    //         <input type="text" className={`form-control ${!formErrors.lastName ? 'is-valid' : 'is-invalid'}`} id="USName"
    //             name="lastName" value={formValues.lastName} onChange={handleChange} />
    //         <div className="text-danger">
    //             {formErrors.lastName}
    //         </div>
    //     </div>
    //     <div className="col-md-6">
    //         <label htmlFor="UAge" className="form-label"> Age </label>
    //         <input type="text" className={`form-control ${!formErrors.age ? 'is-valid' : 'is-invalid'}`} id="UAge"
    //             name="age" value={formValues.age} onChange={handleChange} />
    //         <div className="text-danger">
    //             {formErrors.age}
    //         </div>
    //     </div>
    //     <div className="col-md-6">

    //         <div className="row mt-md-4 pt-md-3">

    //             <div className="col-md-4">
    //                 <label className="form-check-label" >
    //                     Gender
    //                 </label>
    //             </div>
    //             <div className="col-md-4">
    //                 <div className="form-check">
    //                     <input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleChange} />
    //                     <label className="form-check-label" >
    //                         Male
    //                     </label>
    //                 </div>
    //             </div>
    //             <div className="col-md-4">
    //                 <div className="form-check">
    //                     <input className="form-check-input" type="radio" name="gender" value="Fmale" onChange={handleChange} />
    //                     <label className="form-check-label" >
    //                         Female
    //                     </label>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="text-danger">
    //             {formErrors.gender}
    //         </div>
    //     </div>

    //     <div className="col-md-12">
    //         <label className="form-label">Email</label>
    //         <input type="email" className={`form-control ${!formErrors.email ? 'is-valid' : 'is-invalid'}`} name="email" value={formValues.email} onChange={handleChange} />
    //         <div className="text-danger">
    //             {formErrors.email}
    //         </div>
    //     </div>
    //     <div className="col-md-6">
    //         <label className="form-label">Password</label>
    //         <input type="password" className={`form-control ${!formErrors.password ? 'is-valid' : 'is-invalid'}`} name="password" value={formValues.password} onChange={handleChange} />
    //         <div className="text-danger">
    //             {formErrors.password}
    //         </div>
    //     </div>
    //     <div className="col-md-6">
    //         <label className="form-label"> Re Enter Password </label>
    //         <input type="password" className={`form-control ${!formErrors.rpassword ? 'is-valid' : 'is-invalid'}`} name="rpassword" value={formValues.rpassword} onChange={handleChange} />
    //         <div className="text-danger">
    //             {formErrors.rpassword}
    //         </div>
    //     </div>
    //     <div className="col-md-12">
    //         <label className="form-label">Contact Number</label>
    //         <input type="number" className={`form-control ${!formErrors.CNumber ? 'is-valid' : 'is-invalid'}`} name="CNumber" value={formValues.CNumber} onChange={handleChange} />
    //         <div className="text-danger">
    //             {formErrors.CNumber}
    //         </div>
    //     </div>

    //     <div className="col-md-12">
    //         <label className="form-label">Address</label>
    //         <textarea className="form-control" rows="3" name="address" value={formValues.address} onChange={handleChange}></textarea>
    //         <div className="text-danger">
    //             {formErrors.address}
    //         </div>
    //     </div>

    //     <div className="col-md-12">
    //         <label className="form-label"> certificates
    //         </label>
    //         <textarea className="form-control" rows="3" name="certificates" value={formValues.certificates} onChange={handleChange}></textarea>
    //     </div>

    //     <div className="col-md-6">
    //         <label className="form-label">Year Of Experience</label>
    //         <input type="number" className="form-control" name="YearOfExperience" value={formValues.YearOfExperience} onChange={handleChange} />
    //         <div className="text-danger">
    //             {formErrors.YearOfExperience}
    //         </div>
    //     </div>

    //     <div className="col-12 ">
    //         <button type="submit" className="btn btn-primary px-5">
    //             Sign up
    //         </button>
    //         <label className="text-center p-2">
    //             have and account. <a href=''> Login </a> hear
    //         </label>
    //     </div>

    // </form>
  );
};

export default CReg;
