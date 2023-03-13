const pool = require('../db');

function setCurrentUser (req, res, next) {
    const { userId } = req.session;
    console.log(userId)
    res.locals.currentUser = {};
    if(userId) {
        const sql = `select id, email from users where id = ${userId};`;
        pool.query(sql, (err, dbRes) => {
            if (err) {
                console.log(err)
            } else {
                res.locals.currentUser = dbRes.rows[0].email;
                next();
            }
        })
    } else {
        next()
    }
}

module.exports = setCurrentUser