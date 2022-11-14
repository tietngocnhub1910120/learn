const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.getUser); //   api/user/ method get
router.post("/login", UserController.login); //   api/user/login method post
router.post("/register", UserController.register);

module.exports = router;
