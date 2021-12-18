const express = require('express')
const router = new express.Router();
const Blog = require("../models/blog");
const auth = require('../middleware/auth')
const uploadImage = require('../middleware/uploadImage')
const uploadFile = require('../middleware/uploadFile')
const uploadFields = require('../middleware/uploadFields')

//CREATE BLOGS
router.post('/post', auth, uploadFields.fields([{name: 'photo', maxCount: 3}, {name: 'doc', maxCount: 1}]), async (req, res)=> {
  const blog = new Blog({
      ...req.body,
      photos: req.files['photo'][0].buffer,
      docs: req.files['doc'][0].buffer,
      postedBy: req.user._id
  })
  try {
      await blog.save()
      res.status(201).send(blog)
  } catch(e){
      res.status(400).send(e)
  }
})

//POPULATE BLOGS AND GET ALL BLOGS (fail to populate yet)
router.get('/post', auth, async (req, res) => {
  try{
    const blogs = await Blog.find({postedBy: req.user._id})
    res.send(blogs)
  } catch (e) {
    res.status(500).send()
  }
})

//UPDATE BLOG -- 어떻게 photo & doc을 변경할 수 있을 까??
router.patch("/post/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowUpdates = ['title', 'description', 'categories']

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
    res.status(500).send();
  }
});

//GET POST
router.get("/post/:id", auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).send(blog);
  } catch (err) {
    res.status(500).send();
  }
});

// upload image(jpg, jpeg, png)
router.post('/post/photo/:id', auth, uploadImage.single('uploadImage'), async(req, res)=>{
  // user의 blog를 find해서 upload
  const blog = await Blog.findOne({_id: req.params.id , postedBy: req.user._id})
  blog.photo = req.file.buffer
  await blog.save()
  res.send()
}, (error, req, res, next) => {
  res.status(400).send({error: error.message})
}
)

// upload word/pdf/hwp file
router.post('/post/doc/:id', auth, uploadFile.single('uploadFile'), async(req, res)=>{
  const blog = await Blog.findOne({_id: req.params.id, postedBy: req.user._id})
  blog.doc = req.file.buffer
  await blog.save()
  res.send()
}, (error, req, res, next)=>{
  res.status(400).send({error: error.message})
})

module.exports = router;