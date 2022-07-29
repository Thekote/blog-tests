const { Post } = require("../../models");
const postValidator = require("../validators/Post");

const createPost = async (req, res) => {
  try {
    await postValidator.validate(req.body);
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const listPost = async (req, res) => {
  try {
    const posts = await Post.findAll();
    return res.json(posts);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const findOnePost = async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });

    if (!post) {
      return res.sendStatus(404);
    }

    return res.json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const value = await postValidator.validate(req.body);
    const { id } = req.params;
    const [updated] = await Post.update(value, {
      where: { id: id },
    });
    if (updated) {
      const updatedPost = await Post.findOne({ where: { id: id } });
      return res.status(200).json({ updatedPost });
    }
    throw new Error("Post not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPost,
  listPost,
  findOnePost,
  updatePost,
};
