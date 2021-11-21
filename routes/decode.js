const express = require("express");
const router = express.Router();
const DecodeController = require("../controllers/DecodeController");

router.get("/", async (req, res) => {
  // #swagger.tags = ['Decode']
  DecodeController.decode(req, res);
});

module.exports = router;
