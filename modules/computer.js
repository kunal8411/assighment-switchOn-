const mongoose= require('mongoose');

const computerSchema = new mongoose.Schema({
    
    username:{
        type:String
    },
    useremail:{
        type:String
    }
    
},  {
        timestamps: true
});



const Computer=mongoose.model('Computer',computerSchema); 

module.exports= Computer;
