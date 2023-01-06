const mongoose = require('mongoose');
const DentistSchema = new mongoose.Schema({
    fname: { type: String,
    required:[true," first name must be present"],
    },
    lname: { type: String,
        required:[true," last name must be present"],
        },
    location:{type:String,
        required:[true," location must be present"],
    },
   from:{type:String,
        required:[true," the starting hour must be present"],
    },
    to:{type:String,
        required:[true," the end hour must be present"],
    },
    phoneNumber:{type:Number,
        required:[true," phone number must be present"],
    },
    services:{ type: String,
        required:[true," description must be present"],
        },
    yearsOfExperience:{type:Number,
        required:[true," years of experience must be present"],
    },
    recommened:{type:Number,default:0},
    doNotRecommened:{type:Number,default:0},
    rate:{type:Number,default:0.00},
    city:{type:String,
        enum:
        values=["","Nablus","Jenin","Tulkarm","Hebrew","Jerico","Ramallah","Jerusalem"," Qalqilya","Bethlehem","Salfit"],

        
    },
    
    city_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"City"
    },

   

}, { timestamps: true });
module.exports.Dentist = mongoose.model('Dentist', DentistSchema);
