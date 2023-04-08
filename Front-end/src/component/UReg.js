import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UReg = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
  // const [isPasswordMatch, setisPasswordMatch] = useState(false);

  // useEffect(() => {
  //   console.log("RAN", isPasswordMatch);
  //   if (password !== "" && password === confirmPassword) {
  //     setisPasswordMatch(true);
  //   } else {
  //     setisPasswordMatch(false);
  //   }
  // }, [confirmPassword]);
  // if(){

  // }else{
  //   alert("Password is not correctly confirmed ")
  // }
  async function save(event) {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        await axios.post("http://localhost:8080/api/v1/user/add", {
          firstName: firstName,
          lastName: lastName,
          age: age,
          gender: gender,
          email: email,
          password: password,
          mobileNumber: mobileNumber,
          location: location,
        });
        alert("User registered successfully.");
        setFirstName("");
        setLastName("");
        setAge("");
        setGender("");
        setEmail("");
        setPassword("");
        setMobileNumber("");
        setLocation("");
      } catch (err) {
        alert("User registration failed.");
      }
    } else {
      window.alert("ghadahd");
    }
  }
  console.log(firstName);

  //------------------------------------

  // useEffect(() => {
  //   EmployeeServices.getEmployeeById(id)
  //     .then((response) => {
  //       setFirstName(response.data.firstName);
  //       setLastName(response.data.lastName);
  //       setEmailId(response.data.emailId);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const title = () => {
  //   if (id) {
  //     return <h2 className="text-center">Update Employee</h2>;
  //   } else {
  //     return <h2 className="text-center">Add Employee</h2>;
  //   }
  // };


  //--------------------------------------

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
  );
};

export default UReg;
