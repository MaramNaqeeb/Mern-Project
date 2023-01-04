const {User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { json } = require('express');
const {secret}=("../config/jwt");
class UesrController{
    register(req,res){
        const user= new User(req.body)
        user.save()
        .then(()=>{
            // const payload = {
            //     id: user._id
            //   };
            res.cookie("usertoken",jwt.sign({_id:user._id},secret),{})
            .json({msg:"successfully created user",user:user})
        })
            .catch(err =>res.status(400).json(err));
    }


    login(req,res){

        User.findOne({email:req.body.email})
        .then(async(user)=>{
            if(user===null){
            res.json({msg:"invalid login attempt-user not found"})
        }else{
        bcrypt.compare(req.body.password,user.password)
        .then((passwordIsValid)=>{
            if(passwordIsValid){
            res.cookie("usertoken",jwt.sign({_id:user._id},secret,{}))
            .json({msg:"success!"});
        }else{
        res.json({msg:"invalid login attempt-password incorrect"})
        }
        })
            .catch(err =>res.json({msg:"invalid login attempt",err}));
        
    }
})
    .catch(err =>res.json(err));


}

    getLoggedInUser(req,res){
        const decodedJxt=jwt.decode(req.cookie.usertoken,{complete:true})
        User.findById(decodedJxt.payload._id)
        .then(user=>res.json(user))
        .catch(err=>res.json(err))
    }
    
logout(req,res){
    res.cookie("usertoken",jwt.sign({_id:""},secret),{
        httpOnly:true,
        maxAge:0,
    }).json({msg:"ok"})
}
}
module.exports= new UesrController()