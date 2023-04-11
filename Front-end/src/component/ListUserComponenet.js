import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserServices from "../Services/UserServices/UserServices";
import CoachServices from "../Services/CoachServices/CoachServices";

const ListUserComponent = () => {

  // ============user=================

  const [user, setUser] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    UserServices.getAllUsers()
      .then((response) => {
        setUser(response.data);
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

  // ============coach=================

  const [coach, setCoach] = useState([]);

  useEffect(() => {
    getAllCoaches();
  }, []);

  const getAllCoaches = () => {
    CoachServices.getAllCoaches()
      .then((response) => {
        setCoach(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCoach = (coachId) => {
    UserServices.deleteCoach(coachId)
      .then((response) => {
        getAllCoaches();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="container mt-10">

      {/* ===============User================= */}

      <h2 className="text-center mb-4">List of users</h2>
      {/* <Link to = "/add-user" className="btn btn-primary mb-2 mt-5">Add User</Link> */}

      <table className="table table-bordered table-striped">
        <thead>
          <th>User ID</th>
          <th> First Name</th>
          <th> Last Name</th>
          <th> Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-user`}
                >
                  Update
                </Link>
                {/* <Link
                  className="btn btn-info"
                  to={`/edit-user/${user.userId}`}
                >
                  Update
                </Link> */}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.userId)}

                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ===============Coach================= */}

      <h2 className="text-center mt-5 mb-4">List of coaches</h2>
      {/* <Link to = "/add-user" className="btn btn-primary mb-2 mt-5">Add User</Link> */}

      <table className="table table-bordered table-striped mb-5">
        <thead>
          <th>Coach ID</th>
          <th> First Name</th>
          <th> Last Name</th>
          <th> Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {coach.map((coach) => (
            <tr key={coach.coachId}>
              <td>{coach.coachId}</td>
              <td>{coach.firstName}</td>
              <td>{coach.lastName}</td>
              <td>{coach.email}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-coach`}
                >
                  Update
                </Link>
                {/* <Link
                  className="btn btn-info"
                  to={`/edit-user/${user.userId}`}
                >
                  Update
                </Link> */}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCoach(coach.coachId)}

                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default ListUserComponent;
