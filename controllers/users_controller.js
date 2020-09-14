
const User= require('../modules/user')
const Department= require('../modules/department');
const Computer= require('../modules/computer');
const Mechanical= require('../modules/mechanical');
const Civil= require('../modules/civil');
const It= require('../modules/it');
const Electrical=require('../modules/electrical') ;
const Chemical=require('../modules/chemical');
module.exports.login= function(req,res){
    return res.render('login');

}
module.exports.signup= function(req,res){
    return res.render('signup');

}


//post  the sign up data 
module.exports.create= function(req,res){
    if(req.body.password != req.body.confirmpassword){
        return res.redirect('back');

    }  

    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error finding in user in sign up');
            return; 
     
        }
        if(!user){
            User.create({
                email:req.body.email,
                password:req.body.password,
                name:req.body.name,
                department:req.body.type
            }, function(err,user){
                if (err){console.log('error in creating user while signing up',err);  return }
                //add here 
                var type= req.body.type;

                if(type =="computer"){
                    Computer.create({
                        username:req.body.name,
                        useremail:req.body.email
                    })
                }
                if(type=="mechanical"){
                    Mechanical.create({
                        username:req.body.name,
                        useremail:req.body.email
                    })
                }
                if(type=="civil"){
                    Civil.create({
                        username:req.body.name,
                        useremail:req.body.email
                    })
                }
                if(type=="it"){
                    It.create({
                        username:req.body.name,
                        useremail:req.body.email
                    })
                }
                if(type=="electrical"){
                    Electrical.create({
                        username:req.body.name,
                        useremail:req.body.email
                    })
                }
                if(type=="chemical"){
                    Chemical.create({
                        username:req.body.name,
                        useremail:req.body.email
                    })
                }

                return res.redirect('/users/login'); 
            })
        }
        else{
            return res.redirect('back'); 
        }
    });

}

//post login form
module.exports.creteSession= function(req,res){

    
    return res.redirect('/'); 
     
}

//get page to send friend request
 module.exports.getfriendlist= function(req,res){

     return res.render('sendRequest');

 }


 //post request --> to search friends 
 module.exports.addfriend=async function(req,res){
     var type= req.body.type;
     if(type=='computer'){
          var computerfriends= await Computer.find({});
          return res.render('friends',{
              friends:computerfriends
          });  
     }
     if(type=='mechanical'){
        var mechanicalfriends= await Mechanical.find({});
        return res.render('friends',{
            friends:mechanicalfriends
        });  
     }
     if(type=='civil'){
        var civilfriends= await Civil.find({});
        return res.render('friends',{
            friends:civilfriends
        });  
     }
     if(type=='it'){
        var itfriends= await It.find({});
        return res.render('friends',{
            friends:itfriends
        });  
     }
     if(type=='electrical'){
        var eletricalfriends= await Electrical.find({});
        return res.render('friends',{
            friends:eletricalfriends
        });  
     }
     if(type=='chemical'){
        var chemicalfriends= await Chemical.find({});
        return res.render('friends',{
            friends:chemicalfriends
        });  
     }
 }


 
 module.exports.destroySession= function(req,res){
    //this is by default method provided by passoport 
    req.logout();
    
    return res.redirect('/');
}