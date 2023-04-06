import axios from "axios";
import http from "utils/http-common";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

// update user details
const updateUser = async (data) => {
    const response = await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND_SERVER}/user/update`,
      data: data,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  };

//get user by id
const getUserByUserId = async (userId) => {
    return await http.get(`/user/get/${userId}`);
  };
  
  const UserServices = {
    updateUser,
    getUserByUserId,
  };
  
  export default UserServices;
  