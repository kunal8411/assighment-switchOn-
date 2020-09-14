const mongoose= require('mongoose');

const civilSchema = new mongoose.Schema({
    
    username:{
        type:String
    },
    useremail:{
        type:String
    }
    
},  {
        timestamps: true
});



const Civil=mongoose.model('Civil',civilSchema); 

module.exports= Civil;
