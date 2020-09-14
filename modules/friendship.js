
const mongoose= require('mongoose');

const friendshipSchema = new mongoose.Schema({
    
    
    form_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    to_user:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'User'
    },
    status: {
        type: Number
    
      }
    
    
},  {
        timestamps: true
});



const Friendship=mongoose.model('Friendship',friendshipSchema); 

module.exports= Friendship;