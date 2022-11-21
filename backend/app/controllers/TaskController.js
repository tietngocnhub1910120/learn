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
  async getTasks(req, res) {
    const userId = req.userId;

    try {
      const tasks = await Task.find({ poster: userId });
      res.status(201).json({
        message: "Lay tasks thanh cong",
        tasks,
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server khong phan hoi",
        success: false,
      });
    }
  }
  getTask(req, res) {
    res.send("lay tat ca bai viet");
  }
  async editTask(req, res) {
    const userId = req.userId;
    const taskId = req.params.id;

    const { title, body, status } = req.body;

    if (title == "" || body == "") {
      return res.status(403).json({
        message: "Khong duoc bo trong cac truong",
        success: false,
      });
    }

    let updateTask = { title, body, status };

    try {
      updateTask = await Task.findOneAndUpdate(
        {
          _id: taskId,
          poster: userId,
        },
        updateTask,
        { new: true }
      );
      res.status(203).json({
        message: "update thanh cong",
        success: true,
        updateTask,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server khong phan hoi",
        success: false,
      });
    }
  }
  async deleteTask(req, res) {
    const userId = req.userId;
    const taskId = req.params.id;

    try {
      const deleteTask = await Task.findOneAndDelete({
        _id: taskId,
        poster: userId,
      });
      res.status(203).json({
        message: "Xoa bai viet thanh cong",
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server khong phan hoi",
        success: false,
      });
    }
  }
}
module.exports = new TaskController();
