// import axios from "axios";
// import http from "utils/http-common";

// axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

// // update user details
// const updateUser = async (data) => {
//     const response = await axios({
//       method: "put",
//       url: `${process.env.REACT_APP_BACKEND_SERVER}/user/update`,
//       data: data,
//       headers: { "Content-Type": "application/json; charset=utf-8" },
//     });
//     return response;
//   };

// //get user by id
// const getUserByUserId = async (userId) => {
//     return await http.get(`/user/get/${userId}`);
//   };
  
//   const UserServices = {
//     updateUser,
//     getUserByUserId,
//   };
  
//   export default UserServices;



import axios from "axios";

const USER_BASE_REST_API_URL = "http://localhost:8080/api/v1/user";

class UserServices {
  getAllUsers() {
    return axios.get(USER_BASE_REST_API_URL);
  }

  createUser(user) {
    return axios.post(USER_BASE_REST_API_URL, user);
  }

  getUserById(userId) {
    return axios.get(USER_BASE_REST_API_URL + "/" + userId);
  }

  updateUser(userId, user) {
    return axios.put(USER_BASE_REST_API_URL + "/" + userId, user);
  }

  deleteUser(userId) {
    return axios.delete(USER_BASE_REST_API_URL + "/" + userId);
  }
 }

export default new UserServices();
