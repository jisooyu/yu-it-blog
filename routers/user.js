const express = require('express')
const router = new express.Router()
const User = require("../models/user");
const auth = require('../middleware/auth')

//REGISTER
router.post("/user/register", async (req, res) => {
  const user = new User (req.body)
  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })

  } catch (e) {
    res.status(500).send(e);
  }
});

//LOGIN
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({user, token})

  } catch (e) {
    res.status(400).send(e);
  }
});

// LOGOUT
router.post('/user/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter( (token) => {
      return token.token !== req.token
    })
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send(e)
  }
})

// LOGOUT ALL SESSIONS
router.post('/user/logoutAll', auth, async (req, res)=>{
  try{
    req.user.tokens =[]
    await req.user.save()
    res.send()
  } catch (e) {
    res.staus(500).send()
  }
})

// get a user profile w/o user id
router.get('/user/me', auth, async (req, res) => {
  res.send(req.user)
})

//UPDATE
router.patch("/user/me", auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['username', 'email', 'password']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
      updates.forEach((update) => req.user[update] = req.body[update])
      await req.user.save()
      res.send(req.user)
  } catch (e) {
      res.status(400).send('update failed')
  }
})

//DELETE
router.delete("/user/me", auth, async (req, res) => {
  try {
    await req.user.remove()
    res.send(req.user)
  } catch (e) {
    res.status(500).send()
  } 
});

//GET USER
router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;