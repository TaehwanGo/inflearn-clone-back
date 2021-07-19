import * as path from 'path';
import * as express from 'express';
import * as multer from 'multer';
import * as Bluebird from 'bluebird';
import * as fs from 'fs';
import User from '../models/user';
import Lecture from '../models/lecture';
import Image from '../models/image';
import Video from '../models/video';
import Review from '../models/review';


import { isLoggedIn } from './middleware';
import { Op } from 'sequelize/types';

const router = express.Router();


try {
    fs.accessSync('uploads');
}  catch (error) {
    console.log('업로드 폴더가 없어서 생성합니다.');
    fs.mkdirSync('uploads');
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})


var upload = multer({ storage: storage }).single('file')

router.post('/images', upload.array('image'), (req, res) => {
    upload(req, res, err => {
        if(err) {
            return req.json({ success: false, err })
        }
    })
})


router.get('/search/:title', async (req, res, next) => {
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)) {
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
        }
        const lecture = await Lecture.findAll({
            where,
            limit: 20,
            where: { Title: {
                [Op.like]: "%" + req.params.title + "%"
            }},
            include: [
                {
                    model: Image,
                    attributes: ['src']
                },
            ]
        });
        res.json(lecture);
    } catch(err) {
        console.error(err);
        next(err);
    }

})