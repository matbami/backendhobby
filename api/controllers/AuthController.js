/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');

module.exports = {
    //Login function
    login: function (req, res) {
        passport.authenticate('local', function (err, user, info) {
            if (!user) {
                return res.send({ message: "cannot login" });
            }
            if (err) {
                return res.json(err);
            }

            req.login(user, function (err) {
                if (err) res.send(err);
                sails.log('User ' + user.id + ' has logged in.');
                return res.json({ data: user, message: 'Login successfull' });
                res.send({
                    users:{
                        id:user.id,
                        name:user.username
                    }
                })

            })
        })(req, res);
    },

    //Logout function
    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },


    //Register function
    register: function (req, res) {
        //TODO: form validation here

        data = {
            username: req.body.username,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            password: req.body.password,


        }

        if (req.body.password.length < 3) {
            res.send({
                message: "password should be three and above"
            })
        }


        // console.log(data);

        User.create(data).fetch().exec(function (err, user) {
            if (err) return res.negotiate(err);
            console.log('User ' + user.id + ' has signed up.');
            return res.json({ data: user, message: 'Registeration successfull' });
            // sails.log('User '+ user.id +' has signed up.');

            //TODO: Maybe send confirmation email to the user before login
            // req.login(user, function(err){
            //     if (err) return res.negotiate(err);
            //     sails.log('User '+ user.id +' has logged in.');
            //     // return res.redirect('/');
            // })
        })

    }

};

