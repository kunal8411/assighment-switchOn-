const mongoose= require('mongoose');

const chemicalSchema = new mongoose.Schema({
    
    username:{
        type:String
    },
    useremail:{
        type:String
    }
    
},  {
        timestamps: true
});



const Chemical=mongoose.model('Chemical',chemicalSchema); 

module.exports= Chemical;
