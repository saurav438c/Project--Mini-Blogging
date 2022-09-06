const express = require('express');
const router = express.Router();
const blogController= require("../controllers/blogController")
const authorController= require("../controllers/authorController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createblog",blogController.createBlog)
router.post("/createAuthor",authorController.createAuthor)
router.delete("/deleteBlog",blogController.deleteBlog)


 


module.exports = router;