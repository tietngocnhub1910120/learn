const userRoute = require("./user");
module.exports = (app) => {
  app.use("/api/user", userRoute);
};
