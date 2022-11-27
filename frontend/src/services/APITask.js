import api from "./api";
import authHeader from "../utils/authHeader";
class APITask {
  constructor() {
    this.http = api("/api/task");
  }

  async postTask(data) {
    try {
      const response = await this.http.post("/", data, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
  async deleteTask(id) {
    try {
      const response = await this.http.delete(`/${id}`, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
  async editTask(data, id) {
    try {
      const response = await this.http.put(`/${id}`, data, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
  async getTasks() {
    try {
      const response = await this.http.get("/", {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
  async getTask(id) {
    try {
      const response = await this.http.get(`/${id}`, {
        headers: authHeader(),
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default new APITask();
