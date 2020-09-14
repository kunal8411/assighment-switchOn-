
const mongoose= require('mongoose');
var friends = require("mongoose-friends")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    department:{
        type:String
    },
    friends:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Friendship',   
    }],
    status: {
        type: Number 
      }
},  {
        timestamps: true
});


userSchema.plugin(friends({pathName: "myCustomPath"}));
const Users=mongoose.model('Users',userSchema); 

module.exports= Users;

// module.exports.register= function(info, callback ){
//    var users_email= info['users_email'];
//    var friendship_id= info['friendship_id'];


    

//     var query= {email:users_email}
//     Users.findOneAndUpdate(
//         query,
//             {$push:{"friends":{friendship_id:friendship_id}}},
//             {safe: true, upsert: true},
//             callback
//     )
// }