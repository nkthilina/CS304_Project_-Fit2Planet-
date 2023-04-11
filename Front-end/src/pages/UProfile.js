import React from "react";
import { useState, useEffect } from "react";
// import user from "../assets/Img/HomeImg/user.jpg";
import axios from "axios";
import "./Style.css";
import UserCard from "./UserCard";
import UserServices from "../Services/UserServices/UserServices";

const UProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [location, setLocation] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  // ============user=================

  useEffect(() => {
    getAllUsers();
    getUserById();
  }, []);

  const getAllUsers = () => {
    UserServices.getAllUsers()
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (userId) => {
    UserServices.deleteUser(userId)
      .then((response) => {
        getAllUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserById = (userId) => {
    UserServices.getUserById(1)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {users.map((user) => (
        <UserCard
          userId={user?.userId}
          email={user?.email}
          firstName={user?.firstName}
          lastName={user?.lastName}
          location={user?.location}
        />
      ))}
    </div>
  );
};

export default UProfile;
