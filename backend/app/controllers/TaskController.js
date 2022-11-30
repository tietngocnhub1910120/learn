//models
const Task = require("../models/taskModel");
class TaskController {
  async createTask(req, res) {
    const { title, body, status } = req.body;
    const userId = req.userId;
    if (title == "" || body == "") {
      return res.status(401).json({
        message: "Nhập thiếu trường dữ liệu!!!",
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
        message: "Tạo task thành công!!!",
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Máy chủ không phản hồi!!!",
        success: false,
      });
    }
  }
  async getTasks(req, res) {
    const userId = req.userId;

    try {
      const tasks = await Task.find({ poster: userId });
      res.status(201).json({
        message: "Lấy danh sách task thành công!!!",
        tasks,
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Máy chủ không phản hồi!!!",
        success: false,
      });
    }
  }
  async getTask(req, res) {
    const userId = req.userId;
    const id = req.params.id;
    try {
      const task = await Task.findOne({ poster: userId, _id: id });
      res.status(201).json({
        message: "Lấy task thành công!!!",
        task,
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Máy chủ không phản hồi!!!",
        success: false,
      });
    }
  }
  async editTask(req, res) {
    const userId = req.userId;
    const taskId = req.params.id;

    const { title, body, status } = req.body;

    if (title == "" || body == "") {
      return res.status(403).json({
        message: "Nhập thiếu các trường dữ liệu!!!",
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
        message: "Cập nhật thành công!!!",
        success: true,
        updateTask,
      });
    } catch (error) {
      res.status(500).json({
        message: "Máy chủ không phản hồi!!!",
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
        message: "Xóa bài viết thành công!!!",
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Máy chủ không phản hồi!!!",
        success: false,
      });
    }
  }
}
module.exports = new TaskController();
