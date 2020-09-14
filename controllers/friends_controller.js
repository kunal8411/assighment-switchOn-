const Friendship= require('../modules/friendship');
const User= require('../modules/user');
const router = require('../routes/friends');


//on ad button post request will call and add frnds
module.exports.addfriend=async function(req,res){
    
    var senderID= req.body.sender_id;
    var receiverId= req.body.receeiver_id;
    var receivername= req.body.receeiver_name;
    var receiverEmail=req.body.receeiver_email;
    var receiver= await  User.findOne({
        email:receiverEmail
    })
    // console.log("receiver id is:",receiverId)
    // console.log("receiver full info:", receiver);
    await User.requestFriend(senderID, receiver._id);

    return res.redirect('back')
    

}

//get all friends
module.exports.getallfriends=  function(req,res){
    User.getFriends(req.user, function (err, friendships) {
        // console.log(friendships)
        return res.render('getAllFriends',{
            allFriends:friendships
        });

      });
      
}


// get all request which are pending to accept 
module.exports.getpending= function(req,res){
    User.getPendingFriends(req.user, function (err, friendships) {
        // console.log(friendships);
        return res.render('getPendingUsers',{
            pendingUsers:friendships
        });
      });
}

module.exports.approve=async function(req,res){
     await User.requestFriend(req.user, req.params.id);
    
     return res.redirect('back')
}


//delete the request
module.exports.delete =async function(req,res){
    await User.removeFriend(req.user, req.params.id);
   
    return res.redirect('back')
}
    


//get all accepted friends

module.exports.accepted=async function(req,res){
    User.getAcceptedFriends(req.user, function (err, accepted) {
        // console.log(accepted);
        return res.render('acceptedFriends',{
            accepted:accepted
        });
      });
}