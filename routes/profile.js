const express = require('express');
const profile = require('../controllers/profile')
const updateUserInfo= require('../controllers/updateUserInfo')
const router = express.Router();
router.post('/getUserInfo',profile)
router.put('/updateUserInfo', updateUserInfo)
module.exports = router;