const express = require('express')
const router = new express.Router();
const Post = require("../models/post");
const auth = require('../middleware/auth')

//CREATE POST
router.post('/post', auth, async (req, res)=> {
  const post = new Post({
      ...req.body,
      postedBy: req.user._id
  })
  try {
      await post.save()
      res.status(201).send(post)
  } catch(e){
      res.status(400).send(e)
  }
})

//POPULATE POSTS AND GET ALL POSTS
router.get('/post', auth, async (req, res) => {
  // try {
  //     await req.user.populate( {
  //         path:'posts',
  //         options:{
  //             limit: parseInt(req.query.limit),
  //             skip: parseInt(req.query.skip)
  //         }
  //     })
  //     res.send(req.user.posts)
  // } catch (e) {
  //     res.status(500).send()
  // }

  try{
    const foundPosts = await Post.find({postedBy: req.user._id})
    res.send(foundPosts)
  } catch (e) {
    res.status(500).send()
  }
})

//UPDATE POST
router.patch("/post/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowUpdates = ['title', 'description', 'photo', 'categories']

  const isValidOperation = updates.every((update)=> allowUpdates.includes(update))

  if (!isValidOperation){
    return res.status(400).send({error: 'Invalid updates'})
  }

  try {
    const post = await Post.findOne({
      _id: req.params.id,
      postedBy: req.user._id
    })

    if(!post){
      return res.status(404).send()
    }

    updates.forEach((update)=> {post[update] = req.body[update]})
    await post.save()
    res.send(post)

  } catch (e){
    res.status(500).send()
  }
});

//DELETE POST
router.delete("/post/:id", auth, async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({_id: req.params.id, postedBy: req.user._id});

    if (!post){
      return res.status(404).send()
    }
    res.send(post)
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/post/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;