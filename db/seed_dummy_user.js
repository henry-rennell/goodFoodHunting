const { Client } = require('pg');

const bcrypt = require('bcrypt');

const db = new Client({
    database: 'goodfoodhunting'
})
db.connect();

const email = 'dt@ga.co';
const plainTextPassword = 'pudding';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(plainTextPassword, salt, (err, digestedPassword) => {

        const sql = `
            insert into users (email, password_digest)
            values('${email}', '${digestedPassword}');
        `
        db.query(sql, (err, dbRes) => {
            console.log(err);
            db.end();
        })
        //digestedpassword is what we want to save in the db
        console.log(digestedPassword);
    })
})