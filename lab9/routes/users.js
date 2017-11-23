const express = require('express');
const router = express.Router();
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const data = require('../data').funcs;

const isAuthenticatedUserPrivate = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error', 'You cannot access private without logging in!');
        res.redirect('/');
    }
}

const isAuthenticatedUser = (req, res, next) => {
    if(req.isAuthenticated()) {
        res.redirect('/private');
    } else {
        return next();
    }
}

router.get('/', isAuthenticatedUser, (req, res) => {
    res.render('login'); 
});

passport.use(new localStrategy(
    async (username, password, done) => {
        try {
            let user = data.findUserByName(username);
            if(!user) {
                return done(null, false, { message: `${username} is not a valid user!`});
            }
            let res = await data.comparePassword(password, user.hashedPassword);
            if(res) {
                return done(null, user);
            } else {
                return done(null, false, { message: `Incorrect Password!` });
            }
        } catch (err) {
            throw err;
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser((id, done) => {
    try {
        let user = data.findUserById(id);
        return done(null, user);
    } catch (err) {
        done(err);
    }
})

router.post('/login', 
    passport.authenticate('local', {   
        successRedirect: '/private',
        failureRedirect: '/',
        failureFlash: true 
    })
);

router.get('/private', isAuthenticatedUserPrivate, (req, res) => {
    res.render('private');
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You logged out successfully');
    res.redirect('/');
}) 

module.exports = router;