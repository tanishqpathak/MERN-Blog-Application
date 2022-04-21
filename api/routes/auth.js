const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register Proccess
router.post('/register', async (req, res) => {

    try{

        const salt = await bcrypt.genSalt(10);
        const newUser = new User({
          name: req.body.name,
          username: req.body.username,
          password: await bcrypt.hash(req.body.password, salt)
        });

        const user = await newUser.save();
        res.status(200).json(user);
      }
   catch (err){
    res.status(500).json(err)
  }
});

//Login Process

router.post("/login", async (req, res) => {
  try{
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong Credentials");
    
    const validated = await bcrypt.compare(req.body.password, user.password)
    !validated && res.status(400).json("Wrong Credentials");

    const {password, ...others} = user._doc;
    res.status(200).json(others);

  } catch( err ){
    res.status(500).json(err)
  }
})



module.exports = router;