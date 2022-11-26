import api from "./api";
import authHeader from "../utils/authHeader";
class APIUser {
  constructor() {
    this.http = api("/api/user");
  }
  async register(payload) {
    try {
      const response = await this.http.post("/register", payload);

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
  async login(payload) {
    try {
      const response = await this.http.post("/login", payload);

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
  async getUser() {
    try {
      const response = await this.http.get("/", { headers: authHeader() });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

export default new APIUser();
