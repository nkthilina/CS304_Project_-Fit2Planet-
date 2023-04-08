import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserServices from "../Services/UserServices/UserServices";

const ListUserComponent = () => {
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

  return (
    <div className="container mt-10">
      <h2 className="text-center">List of users</h2>
      <Link to = "/add-user" className="btn btn-primary mb-2 mt-5">Add User</Link>

      <table className="table table-bordered table-striped">
        <thead>
          <th>User ID</th>
          <th> First Name</th>
          <th> Last Name</th>
          <th> Email Id</th>
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
                  to={`/edit-user/${user.userId}`}
                >
                  Update
                </Link>
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
    </div>
  );
};

export default ListUserComponent;
