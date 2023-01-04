const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// var uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "user name is required"],
  },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
      
      
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
    
  }, {timestamps: true});
  // add this after UserSchema is defined
 UserSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( (value) => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });

  UserSchema.pre('save', function(next) {
    console.log(this.password);
    bcrypt.hash(this.password, 10)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch(err=>{
        console.log("hashing is not like that",err)
        next();
      })
      
  });
module.exports.User = mongoose.model('User', UserSchema);

  
  
  
  