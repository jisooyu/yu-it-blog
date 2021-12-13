const express = require('express')
const router = new express.Router();
const Blog = require("../models/blog");
const auth = require('../middleware/auth')

//CREATE BLOGS
router.post('/post', auth, async (req, res)=> {
  const blog = new Blog({
      ...req.body,
      postedBy: req.user._id
  })
  try {
      await blog.save()
      res.status(201).send(blog)
  } catch(e){
      res.status(400).send(e)
  }
})

//POPULATE BLOGS AND GET ALL BLOGS
router.get('/post', auth, async (req, res) => {
  try{
    const blogs = await Blog.find({postedBy: req.user._id})
    res.send(blogs)
  } catch (e) {
    res.status(500).send()
  }
})

//UPDATE BLOG
router.patch("/post/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowUpdates = ['title', 'description', 'photo', 'categories']

  const isValidOperation = updates.every((update)=> allowUpdates.includes(update))

  if (!isValidOperation){
    return res.status(400).send({error: 'Invalid updates'})
  }

  try {
    const blog = await Blog.findOne({
      _id: req.params.id,
      postedBy: req.user._id
    })

    if(!blog){
      return res.status(404).send()
    }

    updates.forEach((update)=> {blog[update] = req.body[update]})
    await blog.save()
    res.send(blog)

  } catch (e){
    res.status(500).send()
  }
});

//DELETE POST
router.delete("/post/:id", auth, async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({_id: req.params.id, postedBy: req.user._id});

    if (!blog){
      return res.status(404).send()
    }
    res.send(blog)
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/post/:id", auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;