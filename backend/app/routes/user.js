const router = require("express").Router();
const UserController = require("../controllers/userController");

router.get("/", UserController.getUser);
router.post("/login", UserController.login);
router.post("/register", UserController.register);

module.exports = router;
