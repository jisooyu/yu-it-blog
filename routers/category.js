const router = require("express").Router();
const Category = require("../models/category");
const auth = require('../middleware/auth')

router.post("/category", auth, async (req, res) => {
  const category = new Category ({
    ...req.body
  })
  try {
    await category.save()
    res.status(201).send(category)
  } catch (e) {
    res.status(400).send(e)
  }
});

router.get("/category", auth, async (req, res) => {
  try {
    const foundCategories = await Category.find({});
    res.send(foundCategories);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;