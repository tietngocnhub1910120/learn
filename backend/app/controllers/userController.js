const User = require("../models/userModel");
const argon2 = require("argon2");
class UserController {
  async getUser(req, res) {
    const user = await User.find({});

    res.json({ user });
  }
  login(req, res) {
    res.send("login");
  }
  async register(req, res) {
    const { username, password, comfirmPassword } = req.body;

    // kiem tra rong
    if (username == "" || password == "" || comfirmPassword == "") {
      return res.status(401).json({
        message: "bat buoc nhap tat ca truong",
        success: false,
      });
    }
    // unique username
    const user = await User.findOne({ username: username });
    if (user) {
      return res.status(402).json({
        message: "username nay da co nguoi dung, vui long chon username khac",
        success: false,
      });
    }
    // pass trung pass
    if (password != comfirmPassword) {
      return res.status(403).json({
        message: "password khong trung khop, vui long nhap lai",
        success: false,
      });
    }

    try {
      const hash = await argon2.hash(password);

      const newUser = new User({
        username,
        password: hash,
      });

      await newUser.save();

      res.status(201).json({
        message: "dang ky tai khoan thanh cong",
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "server khong phan hoi",
        success: false,
      });
    }
  }
}
module.exports = new UserController();
