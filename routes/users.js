const express= require('express'); 
const router= express.Router();
const passport= require('passport');
const users_controller= require('../controllers/users_controller');

router.get('/signup', users_controller.signup);
router.get('/login', users_controller.login)
router.post('/create', users_controller.create);
router.post('/createsession', passport.authenticate(
    'local',
    {
        failureRedirect: '/users/login'
        
    },
), users_controller.creteSession);
router.get('/request', users_controller.getfriendlist);
router.post('/request', users_controller.addfriend);
router.get('/logout', users_controller.destroySession)
// router.get
module.exports=router;