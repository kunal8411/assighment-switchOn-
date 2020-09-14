const express= require('express'); 
const router= express.Router();
const friendController= require('../controllers/friends_controller')
router.post('/sendRequest', friendController.addfriend);

router.get('/getallfriends', friendController.getallfriends );
router.get('/pending', friendController.getpending);
// router.post('/pending', call controller here);

router.get('/approve/:id', friendController.approve )
router.get('/delete/:id', friendController.delete);
router.get('/request', friendController.addfriend);
router.get('/accepted', friendController.accepted);
module.exports=router;