const express = require("express");
const { HandleHome } = require("../controllers/url");  // Ensure correct import
const router = express.Router();

router.get("/", HandleHome);  // This should be valid now

module.exports = router;
