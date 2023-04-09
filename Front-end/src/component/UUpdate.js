import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UUpdate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
 
  async function save(event) {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        await axios.post("http://localhost:8080/api/v1/user/add", {
          firstName: firstName,
          lastName: lastName,
          password: password,
          mobileNumber: mobileNumber,
          location: location,
        });
        alert("User registered successfully.");
        setFirstName("");
        setLastName("");
        setPassword("");
        setMobileNumber("");
        setLocation("");
      } catch (err) {
        alert("User registration failed.");
      }
    } else {
      window.alert("done");
    }
  }
  console.log(firstName);


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
          Update
        </button>
      </div>
    </form>
  );
};

export default UUpdate;
