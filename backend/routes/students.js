const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.route('/create-student').post((req, res, next) => {
    Student.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
});

router.route('/').get((req, res) => {
    Student.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
});

router.route('/update-student/:id').put((req, res, next) => {
    Student.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error);
            return next(error);
        } else {
            console.log('Student updated successfully !');
            res.json(data);
        }
    })
});

router.route('/delete-student/:id').delete((req, res, next) => {
    Student.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json({ msg: data });
        }
    });
});

module.exports = router;
