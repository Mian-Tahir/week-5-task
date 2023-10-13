const express = require('express');
const router = express.Router();
const { getUser, createUser } = require('../controller/user/userController');

router.get('/', getUser);
router.post('/createUser', createUser);
console.log('userrouter'); 
module.exports = router;







