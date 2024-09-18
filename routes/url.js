const express = require("express");
const { HandleGenerateNewShortUrl, HandleDefaultRoute, HandleUrlAnalytics, HandleDeleteUrl } = require("../controllers/url");
const router = express.Router();

router.get("/:shortId", HandleDefaultRoute);
router.post("/", HandleGenerateNewShortUrl);
router.get("/analytics/:shortId", HandleUrlAnalytics);
router.post("/delete/:shortId", HandleDeleteUrl);

module.exports = router;
