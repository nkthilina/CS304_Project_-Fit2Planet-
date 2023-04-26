import React from "react";
import { useState, useEffect } from "react";
// import user from "../assets/Img/HomeImg/user.jpg";
import axios from "axios";
import "./Style.css";
import CoachCard from "../component/CoachCard";
import CoachService from "../Services/CoachServices/CoachServices";

const CProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
  const [yearOfExperience, setYearOfExperience] = useState("");
  const [certificates, setCertificates] = useState("");
  const [coach, setCoach] = useState([]);
  const [coaches, setCoaches] = useState([]);

  // ============coach=================

  useEffect(() => {
    getAllCoaches();
    getCoachById();
    deleteCoach();
  }, []);

  const getAllCoaches = () => {
    CoachService.getAllCoaches()
      .then((response) => {
        setCoaches(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCoach = (coachId) => {
    CoachService.deleteCoach(coachId)
      .then((response) => {
        getAllCoaches();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCoachById = (coachId) => {
    CoachService.getCoachById(1)
      .then((response) => {
        setCoach(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {coach?.map((coach) => (
        <CoachCard
          coachId={coach.coachId}
          email={coach.email}
          firstName={coach.firstName}
          lastName={coach.lastName}
          location={coach.location}
          certificates={coach.certificates}
          yearOfExperience={coach.yearOfExperience}
        />
      ))}
    </div>
  );
};

export default CProfile;






// import React from 'react'
//  import { useState, useEffect } from "react";
//  import user from "../assets/Img/HomeImg/user.jpg";
//  import axios from 'axios';
// import './Style.css'

// const CProfile = () => {

//     const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [location, setLocation] = useState("");

//   async function save(event) {
//     event.preventDefault();
//     if (password === confirmPassword) {
//       try {
//         await axios.post("http://localhost:8080/api/v1/user/add", {
//           firstName: firstName,
//           lastName: lastName,
//           password: password,
//           mobileNumber: mobileNumber,
//           location: location,
//         });
//         alert("User registered successfully.");
//         setFirstName("");
//         setLastName("");
//         setPassword("");
//         setMobileNumber("");
//         setLocation("");
//       } catch (err) {
//         alert("User registration failed.");
//       }
//     } else {
//       window.alert("done");
//     }
//   }
//   console.log(firstName);

//     return (

        

//         <div>
//             <section className="bg-light mt-5 ">
//                 <div className="container py-5 mt-10">


//                     <div className="row ">
//                         <div className="col-lg-4 mb-lg-0 mb-5">

//                             <div className="card py-3 border-primary shadow">
//                                 <div className="card-body text-center">
//                                     <img src={user} alt="avatar" className=" rounded-circle img-fluid border border-3 border-primary p-1 profile-img" />

//                                     <h3 className="my-3">Thilina Madhusanka</h3>
//                                     <p>Lorem ipsum dolor sit</p>
//                                     <p className="text-muted mb-4">
//                                         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                                         Praesentium animi vel labore, debitis quasi corporis temporibus dignissimos id, voluptas
//                                         ipsa, sequi dolore aliquam amet aut iusto magnam ipsum.
//                                     </p>
//                                     <div className="d-flex justify-content-center">
//                                         <button type="button" className="btn btn-outline-danger ms-1"><a href="/UpdateForm">Edit</a></button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-8">

//                             <div className="card border-primary shadow">

//                                 <div className="card-body">

//                                     <div className="row ">
//                                         <div className="col-sm-3">
//                                             <h6>First Name</h6>
//                                         </div>
//                                         <div className="col-sm-9">
//                                             <p className="text-muted mb-0">Thlina</p>
//                                         </div>
//                                     </div>
//                                     <hr />
//                                     <div className="row ">
//                                         <div className="col-sm-3">
//                                             <h6>Last Name</h6>
//                                         </div>
//                                         <div className="col-sm-9">
//                                             <p className="text-muted mb-0">Madhusanka</p>
//                                         </div>
//                                     </div>
//                                     <hr />
//                                     <div className="row ">
//                                         <div className="col-sm-3">
//                                             <h6>Contact Number</h6>
//                                         </div>
//                                         <div className="col-sm-9">
//                                             <p className="text-muted mb-0">0766144258</p>
//                                         </div>
//                                     </div>
//                                     <hr />
//                                     <div className="row ">
//                                         <div className="col-sm-3">
//                                             <h6>Address</h6>
//                                         </div>
//                                         <div className="col-sm-9">
//                                             <p className="text-muted mb-0">3</p>
//                                         </div>
//                                     </div>
//                                     <hr />
//                                     <div className="row ">
//                                         <div className="col-sm-3">
//                                             <h6>Certificates</h6>
//                                         </div>
//                                         <div className="col-sm-9">
//                                             <p className="text-muted mb-0">None</p>
//                                         </div>
//                                     </div>
//                                     <hr />
//                                     <div className="row ">
//                                         <div className="col-sm-3">
//                                             <h6>Year Of Experience</h6>
//                                         </div>
//                                         <div className="col-sm-9">
//                                             <p className="text-muted mb-0">None</p>
//                                         </div>
//                                     </div>



//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default CProfile