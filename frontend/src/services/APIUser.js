import api from "./api";

class APIUser {
  constructor() {
    this.http = api("/api/user");
  }
  register(payload) {
    const response = this.http.post("/register", payload);

    return response;
  }
  login() {}
  getUser() {}
}

export default new APIUser();
