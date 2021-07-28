const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const { Op } = require('sequelize');
const { isLoggedIn } = require('./middleware');
const router = express.Router();
const { Image, User, Video, Review, Lecture } = require('../models')


try {
    fs.accessSync('uploads'); 
} catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.'); 
    fs.mkdirSync('uploads'); 
}



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

var upload = multer({ storage: storage }).single('file')





module.exports = router;