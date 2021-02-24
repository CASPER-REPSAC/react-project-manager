const express = require("express");
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const sendQuery = require("../feature/db");

const secret = require("../config/secret.json");

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});
passport.use(new GoogleStrategy({
        clientID: secret.google_api.clientID,
        clientSecret: secret.google_api.clientSecret,
        callbackURL: secret.google_api.callbackURL
    }, function(accessToken, refreshToken, profile, done) {
        process.nextTick(async () => {
            user = profile;

            const rows = await sendQuery(`SELECT user_id FROM user WHERE user_id = ?`, [profile.id]);
            if(rows.length == 0){
                const user_id = profile.id;
                const user_image = profile.photos[0].value;
                const user_name = profile._json.name;

                await sendQuery(`INSERT INTO user (user_id, user_name, user_image, auth, registration_date) VALUES
                                               (?, ?, ?, "guest", sysdate())`, [user_id, user_name, user_image]);
            }
            
            return done(null, user);
        });
    }
));

router.get('/login', passport.authenticate('google', { scope: ['profile']}));
router.get("/logout", (req, res) => {
    req.session.passport = undefined;
    res.redirect(secret.redirectURL);
})
router.get('/auth/google/callback', passport.authenticate( 'google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect(secret.redirectURL);
});

module.exports = router;