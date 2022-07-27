const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    return res.render('home.ejs');
});

router.get('/register', (req, res) => {
    return res.render('register.ejs');
});

router.post('/', (req, res) => {
    let personInfo = req.body;

    User.findOne({username: personInfo.username}, (err, data) => {
        if (!data) {
            let c;
            User.findOne({}, (err, data) => {
                if (data) {
                    c = data.unique_id + 1;
                } else {
                    c = 1;
                }

                let newPerson = new User({
                    unique_id: c,
                    username: personInfo.username,
                    password: personInfo.password
                });

                newPerson.save((err, Person) => {
                    if (err) console.log(err);
                    else console.log('Success ' + Person);
                });
            })
                .sort({_id: -1})
                .limit(1);
            res.send({
                Success: 'You are regestered,You can login now.'
            });
        } else {
            res.send({Success: 'Username is already used.'});
        }
    });
});

router.get('/login', (req, res) => {
    return res.render('login.ejs');
});

router.post('/login', (req, res) => {
    User.findOne({username: req.body.username}, (err, data) => {
        if (data) {
            if (data.password == req.body.password) {
                req.session.userId = data.unique_id;
                res.send({Success: 'Success!'});
            } else {
                res.send({Success: 'Wrong password!'});
            }
        } else {
            res.send({Success: 'This username is not regestered!'});
        }
    });
});

router.get('/profile', (req, res) => {
    User.findOne({unique_id: req.session.userId}, (err, data) => {
        if (!data) {
            res.redirect('/');
        } else {
            return res.render('profile.ejs', {
                name: data.username
            });
        }
    });
});

router.get('/logout', (req, res, next) => {
    if (req.session) {
        // delete session object
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});

module.exports = router;
