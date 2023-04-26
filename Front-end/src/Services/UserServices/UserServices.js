import axios from "axios";
import http from "../../Utils/http-common";

const USER_BASE_REST_API_URL = "http://localhost:8080/api/v1";
axios.defaults.baseURL = USER_BASE_REST_API_URL;

class UserServices {
  getAllUsers() {
    return http.get("/user/getAllUsers");
  }

  async createUser(user) {
    // return axios.post(USER_BASE_REST_API_URL, user);
    const response = await axios({
      method: "post",
      url: `${USER_BASE_REST_API_URL}/add`,
      data: user,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  }

  getUserById(userId) {
    return axios.get(USER_BASE_REST_API_URL + "/" + userId);
  }

  async updateUser(user){
    // return http.put<any>(`/event/placeevent/${id}`);
    const response = await axios({
      method: "put",
      url: `${USER_BASE_REST_API_URL}/update/{userId}`,
      data: user,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  };

  // updateUser(userId, user) {
  //   return axios.put(USER_BASE_REST_API_URL + "/" + userId, user);
  // }

  // deleteUser(userId) {
  //   return axios.delete(USER_BASE_REST_API_URL + "/" + userId);
  // }

  //  async updateUserNew (data) {
  //     const response = await axios({
  //       method: "put",
  //       url: `${USER_BASE_REST_API_URL}/user/updateuser`,
  //       data: data,
  //       headers: { "Content-Type": "application/json; charset=utf-8" },
  //     });
  //     return response;
  //   };

  //   async bookedEvent  (id){
  //     return http.put(`/event/bookevent/${id}`);
  //   };

  // async getEventsByUserId(userId) => {
  //   return http.get(`/event/geteventsbyuserid/${id}`);
  // };
  
  async deleteUser(userId){
    return http.delete(`/user/deleteUser/${userId}`);
  }

}

export default new UserServices();
