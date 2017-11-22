const express = require('express');
const router = express.Router();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const data = require('../data');
const users = data.users;
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    // if(req.user) {
    //     res.redirect('/private');
    // }
    res.render('login'); 
});

const comparePassword = (candidatePassword, hashedPassword, callback) => {
    bcrypt.compare(candidatePassword, hashedPassword, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

passport.use(new localStrategy(
    function (username, password, done) {
        console.log(username, password);
        let user = users.find(x => x.username === username);
        if(!user) {
            return done(null, false, { message: 'This username does not exist!' });
        }
        user.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid password!' });
            }
        })
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser((id, done) => {
    let user = users.find(x => x._id === id);
    done(err, user);
})

router.post('/login', (req, res) => {
    passport.authenticate(  'local', 
                            {   successRedirect: '/private',
                                failureRedirect: '/',
                                failureFlash: true }
)});

router.get('/private', (req, res) => {
    res.json(req.user);
});

module.exports = router;