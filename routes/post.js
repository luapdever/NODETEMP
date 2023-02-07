const { index, create } = require("../controllers/postControllers");
const express = require("express");
const { validatePostReq } = require("../validation/postReq");
const router = express.Router();

router.get("/", index);
router.post("/", validatePostReq, create);

module.exports = router;
