const { index } = require("../controllers/homeControllers");
const express = require("express");
const router = express.Router();

router.get("/", index);

module.exports = router;
