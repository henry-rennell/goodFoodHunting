const express = require('express');
const router = express.Router();
const ensureLoggedIn = ('./../middlewares/ensureLoggedIn');
const pool = require('../db');


router.get("/", (req, res) => {

    const sql = "select * from dishes order by id desc;"
    
    pool.query(sql, (err, dbRes) => {
        const dishes = dbRes.rows;

        res.render('home', {dishes, email: req.session.email});

    })

})

router.get('/dishes/new', (req, res) => {

    
    res.render('share');
})

router.get('/dishes/:dish_id/edit', (req, res) =>{
    const sql = `select * from dishes where id = ${req.params.dish_id};`;
    
    pool.query(sql, (err, dbRes) =>{
        let dish = dbRes.rows[0];
        res.render('edit_dish', { dish, });
    })
})

//route is the http method + path
router.post('/dishes', (req, res) => {
    let dishTitle = req.body.title;
    let dishImage = req.body.image_url;
    let sql = `insert into dishes (title, image_url, user_id) values ($1, $2, $3);`;

    pool.query(sql, [dishTitle, dishImage, req.session.userId], (err, dbRes) =>{
        console.log(sql)
        if (err) {
            console.log(err);
        }
        res.redirect('/');
    })
    
})

router.put('/dishes/:dish_id', (req, res) =>{
    const sql = `update dishes set title = '${req.body.title}', image_url = '${req.body.image_url}' where id = ${req.params.dish_id};`
    pool.query(sql, (err, dbRes) => {
        res.redirect(`/dishes/${req.body.id}`);
    })
});


router.get('/dishes/:dish_Id', (req, res) => {
    const sql = `select * from dishes where id = '${req.params.dish_Id}'`;
    pool.query(sql, (err, dbRes) =>{
        let dish = dbRes.rows[0];
        
        res.render('details', { dish });
    });
}) ;



router.delete('/dishes/:dish_id', (req, res) =>{
let sql = `delete from dishes where id = ${req.params.dish_id};`;
    
    pool.query(sql, (err, dbRes) => {
        res.redirect('/');
    })
})
module.exports = router;
