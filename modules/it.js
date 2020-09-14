const mongoose= require('mongoose');

const itSchema = new mongoose.Schema({
    
    username:{
        type:String
    },
    useremail:{
        type:String
    }
    
},  {
        timestamps: true
});



const It=mongoose.model('It',itSchema); 

module.exports= It;
