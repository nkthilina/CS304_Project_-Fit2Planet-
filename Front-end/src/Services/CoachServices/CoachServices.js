import axios from "axios";
import http from "../../Utils/http-common";

const USER_BASE_REST_API_URL = "http://localhost:8080/api/v1";
axios.defaults.baseURL = USER_BASE_REST_API_URL;

class CoachServices {
  getAllCoaches() {
    return http.get("/coach/getAllCoaches");
  }

  async createCoach(coach) {
    const response = await axios({
      method: "post",
      url: `${USER_BASE_REST_API_URL}/coach/add`,
      data: coach,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  }

  getCoachById(coachId) {
    return axios.get(USER_BASE_REST_API_URL + "/" + coachId);
  }

  async updateCoach(coach){
    const response = await axios({
      method: "put",
      url: `${USER_BASE_REST_API_URL}/coach/update/{coachId}`,
      data: coach,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    return response;
  };

  
  async deleteCoach(coachId){
    return http.delete(`/coach/delete/${coachId}`);
  }

}

export default new CoachServices();
