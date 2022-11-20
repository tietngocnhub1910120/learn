const router = require("express").Router();
const TaskController = require("../controllers/TaskController");
const verify = require("../utils/verify");

router.put("/:id", verify, TaskController.editTask);
router.get("/:id", verify, TaskController.getTask);
router.delete("/:id", verify, TaskController.deleteTask);
router.post("/", verify, TaskController.createTask);
router.get("/", verify, TaskController.getTasks);

module.exports = router;
