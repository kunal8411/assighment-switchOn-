const mongoose= require('mongoose');

const mechaniocalSchema = new mongoose.Schema({
    
    username:{
        type:String
    },
    useremail:{
        type:String
    }
    
},  {
        timestamps: true
});



const Mechanical=mongoose.model('Mechanical',mechaniocalSchema); 

module.exports= Mechanical;
