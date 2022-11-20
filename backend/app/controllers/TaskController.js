//models
const Task = require("../models/taskModel");
class TaskController {
  async createTask(req, res) {
    const { title, body, status } = req.body;
    const userId = req.userId;
    if (title == "" || body == "") {
      return res.status(401).json({
        message: "Khong duoc bo trong cac truong",
        success: false,
      });
    }

    try {
      const newTask = new Task({
        title,
        body,
        status,
        poster: userId,
      });

      await newTask.save();

      res.status(200).json({
        message: "Tao task thanh cong",
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Server khong phan hoi",
        success: false,
      });
    }
  }
  getTasks(req, res) {
    res.send("lay tat ca bai viet");
  }
  getTask(req, res) {
    res.send("lay tat ca bai viet");
  }
  editTask(req, res) {
    res.send("lay tat ca bai viet");
  }
  deleteTask(req, res) {
    res.send("lay tat ca bai viet");
  }
}
module.exports = new TaskController();
