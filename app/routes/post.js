const { Router } = require("express");
const postController = require("../controllers/post.js");

const router = Router();

router
  .post("/post", postController.createpost)
  .get("/post", postController.listpost)
  .get("/post/:id", postController.findOnepost)
  .put("/post/:id", postController.updatepost);

module.exports = router;
