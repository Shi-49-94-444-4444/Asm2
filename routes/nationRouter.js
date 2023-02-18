const express = require("express");
const bodyParser = require("body-parser");
const nationController = require("../controllers/nationController");
const nationsRouter = express.Router();
nationsRouter.use(bodyParser.json());
nationsRouter
  .route("/")
  .get(nationController.index)
  .post(nationController.create);
nationsRouter
  .route("/edit/:nationId")
  .get(nationController.formEdit)
  .post(nationController.edit);
nationsRouter.route("/delete/:nationId").get(nationController.delete);

module.exports = nationsRouter;
