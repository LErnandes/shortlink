const express = require("express");
const router = express.Router();
const EncodeController = require("../controllers/EncodeController");

router.post("/", async (req, res) => {
  // #swagger.tags = ['Encode']
  EncodeController.encode(req, res);
});

module.exports = router;
