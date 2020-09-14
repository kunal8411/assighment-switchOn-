const mongoose= require('mongoose');

const departmentSchema = new mongoose.Schema({
    
    department:{
       deptname:{type:String},
       userDetails: [{
        userName:{type:String},
        userEmail:{type:String}

        }]
    }
},  {
        timestamps: true
});



const Department=mongoose.model('Department',departmentSchema); 

module.exports= Department;
