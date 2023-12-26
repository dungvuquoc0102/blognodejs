const express = require("express");
const { getHomepage, getPosts } = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomepage);
router.get("/posts", getPosts);

module.exports = router;
