const express = require("express");
const bodyParser = require("body-parser");
const playerController = require("../controllers/playerController");
const playersRouter = express.Router();
playersRouter.use(bodyParser.json());
playersRouter
  .route("/")
  .get(playerController.index)
  .post(playerController.create);
playersRouter
  .route("/edit/:id")
  .get(playerController.formEdit)
  .post(playerController.edit);
playersRouter.route("/delete/:id").get(playerController.delete);

module.exports = playersRouter;
