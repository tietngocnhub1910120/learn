const User = require("../models/userModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
class UserController {
  async getUser(req, res) {
    const userId = req.userId;
    try {
      const user = await User.findOne({ _id: userId }).select("-password");
      res.status(200).json({
        message: "Lấy thông tin thành công!!!",
        user,
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Máy chủ không phản hồi!!!",
        success: false,
      });
    }
  }
  async login(req, res) {
    const { username, password } = req.body;
    //khong nhap gi
    if (username == "" || password == "") {
      return res.status(401).json({
        message: "Nhập thiếu trường password hoặc username!!!",
        success: false,
      });
    }

    try {
      //khong ton tai user
      const user = await User.findOne({ username: username });

      if (!user) {
        return res.status(402).json({
          message: "Tài khoản không tồn tại!!!",
          success: false,
        });
      }
      //khong dung password
      const check = await argon2.verify(user.password, password);
      if (!check) {
        return res.status(403).json({
          message: "password không đúng!!!",
          success: false,
        });
      }
      // truong hoop hop le
      const token = jwt.sign(user._id.toString(), "ufhdfhfhdgghcvh");

      res.status(201).json({
        message: "Đăng nhập thành công!!!",
        success: true,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Máy chủ không phản hồi!!!",
        success: false,
      });
    }
  }
  async register(req, res) {
    const { username, password, comfirmPassword } = req.body;

    // kiem tra rong
    if (username == "" || password == "" || comfirmPassword == "") {
      return res.status(401).json({
        message: "Nhập thiếu trường dữ liệu!!!",
        success: false,
      });
    }

    try {
      // unique username
      const user = await User.findOne({ username: username });
      if (user) {
        return res.status(402).json({
          message:
            "username này đã có người chọn, vui lòng chọn username khác!!!",
          success: false,
        });
      }
      // pass trung pass
      if (password != comfirmPassword) {
        return res.status(403).json({
          message: "password không khớp",
          success: false,
        });
      }
      const hash = await argon2.hash(password);

      const newUser = new User({
        username,
        password: hash,
      });

      await newUser.save();

      const token = jwt.sign(newUser._id.toString(), "ufhdfhfhdgghcvh");

      res.status(201).json({
        message: "Đăng ký tài khoản thành công!!!",
        success: true,
        token,
      });
    } catch (error) {
      res.status(500).json({
        message: "Máy chủ không phản hồi!!!",
        success: false,
      });
    }
  }
}
module.exports = new UserController();
