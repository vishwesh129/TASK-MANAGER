const express = require('express');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const { Usermodel } = require('../Models/User.model');

const userRouter = express.Router();

userRouter.post("/signup" , async(req, res) => {
    const {fullname, email, password} = req.body;
    const hash = bcrypt.hashSync(password, 8);
    const new_user = new Usermodel({
        fullname,
        email,
        password : hash,
    })
    
    await new_user.save();
    res.send({"msg":"Signup successful"})
})

userRouter.post("/login" , async(req, res) => {
    const {email, password} = req.body;
    const user = await Usermodel.findOne({email})

    if(!user){
        res.send("Please Signup!")
    }
    const hash = user.password;
    const correct_password = bcrypt.compareSync(password, hash);

    if(correct_password){
        const token = jwt.sign({ userID : user._id }, process.env.JWT_SECRET);
        res.send({"message": "Login Successful" , "token": token})
    }
    else{
        res.send("Login Failed");
    }
})

module.exports = {userRouter};