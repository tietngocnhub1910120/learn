class UserController {
  getUser(req, res) {
    res.send("ban dang o dau");
  }
  login(req, res) {
    res.send("login");
  }
  register(req, res) {
    res.send("dang ki");
  }
}
module.exports = new UserController();
