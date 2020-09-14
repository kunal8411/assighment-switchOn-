const mongoose= require('mongoose');

const electricalSchema = new mongoose.Schema({
    
    username:{
        type:String
    },
    useremail:{
        type:String
    }
    
},  {
        timestamps: true
});



const Electrical=mongoose.model('Electrical',electricalSchema); 

module.exports= Electrical;
