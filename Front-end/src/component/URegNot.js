import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UReg = () => {


//   const [formValues.userId, setUserId] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [location, setLocation] = useState("");

  // const [formValues.firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [location, setLocation] = useState("");

  // async function save(event) {
  //   event.preventDefault();
  //   try{
  //       await axios.post("http://localhost:8080/api/v1/user/add",{
  //           firstName : formValues.firstName,
  //           lastName : formValues.lastName,
  //           age : formValues.age,
  //           gender : formValues.gender,
  //           email : formValues.email,
  //           password : formValues.password,
  //           mobileNumber : formValues.mobileNumber,
  //           location : formValues.location
        
  //       });
  //       alert("User registered successfully");
  //       setFirstName("First name is required");
  //       setLastName("");
  //       setAge("");
  //       setGender("");
  //       setEmail("");
  //       setPassword("");
  //       setMobileNumber("");
  //       setLocation("");
  //   }
  //   catch(err){
  //       alert("User registration failed.");
  //   }
  // }


  // async function save(handleChange) {
  //   handleChange.preventDefault();
  //   try{
  //       await axios.post("http://localhost:8080/api/v1/user/add",{
  //           firstName : firstName,
  //           lastName : lastName,
  //           age : age,
  //           gender : gender,
  //           email : email,
  //           password : password,
  //           mobileNumber : mobileNumber,
  //           location : location
        
  //       });
  //       alert("User registered successfully");
  //       setFirstName("First name is required");
  //       setLastName("");
  //       setAge("");
  //       setGender("");
  //       setEmail("");
  //       setPassword("");
  //       setMobileNumber("");
  //       setLocation("");
  //   }
  //   catch(err){
  //       alert("User registration failed.");
  //   }
  // }



  // const hasFormSubmit = async (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     const response = await fetch('/api/register', {
  //       method: 'POST',
  //       body: formData
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //   }

//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     age: "",
//     gender: "",
//     email: "",
//     password: "",
//     rpassword: "",
//     CNumber: "",
//     address: "",
//     YearOfExperience: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: " First name is required ",
//     lastName: " Last name is required ",
//     age: " Age is required ",
//     gender: " Gender is required ",
//     email: " Email is required ",
//     password: " Password is required ",
//     rpassword: "re-enter password",
//     CNumber: " Contact Number is required ",
//   });
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(params) {
    const { name, value, type, checked } = params.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
    setFormErrors(validate(formValues));
  }

  function onSubmit(params) {
    params.preventDefault();
    setIsSubmit(true);
    console.log(formValues);
  }

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  function validate(values) {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const CNumberRegex = /^\d{10}$/;

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

    if (!values.rpassword) {
      errors.rpassword = "rPassword is required";
    }

    if (values.rpassword !== values.password) {
      errors.rpassword = "rpassword Not Match";
      console.log(values.password);
      console.log(values.rpassword);
    }

    if (!values.firstName) {
      errors.firstName = "firstName is required!";
    }
    if (!values.lastName) {
      errors.lastName = "lastName is required!";
    }
    if (!values.age) {
      errors.age = "age is required!";
    } else if (!values.age.length <= 3) {
      errors.age = "not a valid age ";
    } else if (!values.age.isInteger()) {
      errors.age = "not a valid age ";
    }

    if (!values.gender) {
      errors.gender = "gender is required!";
    }
    if (!values.CNumber) {
      errors.CNumber = "CNumber is required!";
    } else if (!CNumberRegex.test(values.CNumber)) {
      errors.CNumber = "not a valid Contact Number";
    }

    if (!values.certificates) {
      errors.certificates = "certificates is required!";
    }

    return errors;
  }

  return (
    <form className="row g-3 needs-validation">
      {/* <div className="col-md-6">
                <label htmlFor="UFName" className="form-label"> First name </label>
                <input type="text" className={`form-control ${!formErrors.firstName ? 'is-valid' : 'is-invalid'}`} id="UFName"
                    name="firstName" value={formValues.firstName} onChange={handleChange} />
                <div className="text-danger">
                    {formErrors.firstName}
                </div>
            </div> */}
      <div className="col-md-6">
        <label htmlFor="UFName" className="form-label">
          {" "}
          First name{" "}
        </label>
        <input
          type="text"
          className={`form-control ${
            !formErrors.firstName ? "is-valid" : "is-invalid"
          }`}
          id="UFName"
          name="firstName"
          value={formValues.firstName}
          onChange={(handleChange) => {
            setFirstName(handleChange.target.value);
          }}
        />
        <div className="text-danger">{formErrors.firstName}</div>
      </div>
      {/* <div className="col-md-6">
                <label htmlFor="USName" className="form-label"> Last name </label>
                <input type="text" className={`form-control ${!formErrors.lastName ? 'is-valid' : 'is-invalid'}`} id="USName"
                    name="lastName" value={formValues.lastName} onChange={handleChange} />
                <div className="text-danger">
                    {formErrors.lastName}
                </div>
            </div> */}
      <div className="col-md-6">
        <label htmlFor="USName" className="form-label">
          {" "}
          Last name{" "}
        </label>
        <input
          type="text"
          className={`form-control ${
            !formErrors.lastName ? "is-valid" : "is-invalid"
          }`}
          id="USName"
          name="lastName"
          value={formValues.lastName}
          onChange={(handleChange) => {
            setLastName(handleChange.target.value);
          }}
        />
        <div className="text-danger">{formErrors.lastName}</div>
      </div>
      {/* <div className="col-md-6">
                <label htmlFor="UAge" className="form-label"> Age </label>
                <input type="text" className={`form-control ${!formErrors.age ? 'is-valid' : 'is-invalid'}`} id="UAge"
                    name="age" value={formValues.age} onChange={handleChange} />
                <div className="text-danger">
                    {formErrors.age}
                </div>
            </div> */}
      <div className="col-md-6">
        <label htmlFor="UAge" className="form-label">
          {" "}
          Age{" "}
        </label>
        <input
          type="text"
          className={`form-control ${
            !formErrors.age ? "is-valid" : "is-invalid"
          }`}
          id="UAge"
          name="age"
          value={formValues.age}
          onChange={(handleChange) => {
            setAge(handleChange.target.value);
          }}
        />
        <div className="text-danger">{formErrors.age}</div>
      </div>
      {/* <div className="col-md-6">

                <div className="row mt-md-4 pt-md-3">

                    <div className="col-md-4">
                        <label className="form-check-label" >
                            Gender
                        </label>
                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleChange} />
                            <label className="form-check-label" >
                                Male
                            </label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="Fmale" onChange={handleChange} />
                            <label className="form-check-label" >
                                Female
                            </label>
                        </div>
                    </div>
                </div>
                <div className="text-danger">
                    {formErrors.gender}
                </div>
            </div> */}
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
                onChange={(handleChange) => {
                    setGender(handleChange.target.value);
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
                onChange={(handleChange) => {
                    setGender(handleChange.target.value);
                  }}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>
        <div className="text-danger">{formErrors.gender}</div>
      </div>

      {/* <div className="col-md-12">
        <label className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${
            !formErrors.email ? "is-valid" : "is-invalid"
          }`}
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <div className="text-danger">{formErrors.email}</div>
      </div> */}
      <div className="col-md-12">
        <label className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${
            !formErrors.email ? "is-valid" : "is-invalid"
          }`}
          name="email"
          value={formValues.email}
          onChange={(handleChange) => {
            setEmail(handleChange.target.value);
          }}
        />
        <div className="text-danger">{formErrors.email}</div>
      </div>
      {/* <div className="col-md-6">
        <label className="form-label">Password</label>
        <input
          type="password"
          className={`form-control ${
            !formErrors.password ? "is-valid" : "is-invalid"
          }`}
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <div className="text-danger">{formErrors.password}</div>
      </div> */}
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input
          type="password"
          className={`form-control ${
            !formErrors.password ? "is-valid" : "is-invalid"
          }`}
          name="password"
          value={formValues.password}
          onChange={(handleChange) => {
            setPassword(handleChange.target.value);
          }}
        />
        <div className="text-danger">{formErrors.password}</div>
      </div>
      <div className="col-md-6">
        <label className="form-label"> Re Enter Password </label>
        <input
          type="password"
          className={`form-control ${
            !formErrors.rpassword ? "is-valid" : "is-invalid"
          }`}
          name="rpassword"
          value={formValues.rpassword}
          onChange={handleChange}
        />
        <div className="text-danger">{formErrors.rpassword}</div>
      </div>
      <div className="col-md-12">
        <label className="form-label">Contact Number</label>
        <input
          type="number"
          className={`form-control ${
            !formErrors.CNumber ? "is-valid" : "is-invalid"
          }`}
          name="CNumber"
          value={formValues.CNumber}
          onChange={handleChange}
        />
        <div className="text-danger">{formErrors.CNumber}</div>
      </div>

      <div className="col-md-12">
        <label className="form-label">Address</label>
        <textarea
          className="form-control"
          rows="3"
          name="address"
          value={formValues.address}
          onChange={handleChange}
        ></textarea>
        <div className="text-danger">{formErrors.address}</div>
      </div>

      <div className="col-12 ">
        <button type="submit" className="btn btn-primary px-5" onClick={save}>
          Sign up
        </button>
        <label className="text-center p-2">
          have and account. <a href=""> Login </a> hear
        </label>
      </div>
    </form>
  );
};

export default UReg;
