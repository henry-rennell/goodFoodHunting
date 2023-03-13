const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const pool = require('../db');

router.get('/login', (req, res) => {
    res.render('login');
})// session

router.post('/sessions', (req,res) => {
    //creating a new session - logging in 

    const email = req.body.email;
    const password = req.body.password;

    //check do you even exist in users table.
    const sql = `select * from users where email = '${email}';`
    pool.query(sql, (err, dbRes) => {
        //did we get a record back?
        if (dbRes.rows.length === 0) {
            //no good, user doesnt exist in users table stay at the login page
            res.render('login');
        }
        const user = dbRes.rows[0];
        bcrypt.compare(password, dbRes.rows[0].password_digest, (err, result) => {
            if(result) {
                req.session.userId = user.id;
                res.redirect('/');
            } else {
                res.render('login');
            }
        })
    })

})

router.delete('/sessions', (req, res) => {
    req.session.destroy(() => {
        res.redirect('login');
    })
})

module.exports = router