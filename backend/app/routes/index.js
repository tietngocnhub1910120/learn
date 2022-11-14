const userRoute = require("./user");
const taskRoute = require("./task");
module.exports = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/task", taskRoute);
};
