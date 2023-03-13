
const { Pool } = require('pg');
const pool = new Pool({
    database: 'goodfoodhunting',
});


let sql = `create table if not exists dishes (
    id serial primary key,
    title text,
    image_url text
);
`;

let sampleDishes = ["Arepas", "Barbecue Ribs", "Bruschette with Tomato", "Bunny Chow", "Caesar Salad", "California Maki", "Caprese Salad", "Cauliflower Penne", "Cheeseburger", "Chicken Fajitas", "Chicken Milanese", "Chicken Parm", "Chicken Wings", "Chilli con Carne", "Ebiten maki", "Fettuccine Alfredo", "Fish and Chips", "French Fries", "Sausages", "French Toast", "Hummus", "Katsu Curry", "Kebab", "Lasagne", "Linguine with Clams", "Massaman Curry", "Meatballs with Sauce", "Mushroom Risotto", "Pappardelle alla Bolognese", "Pasta Carbonara", "Pasta and Beans", "Pasta with Tomato and Basil", "Peking Duck", "Philadelphia Maki", "Pho", "Pierogi", "Pizza", "Poke", "Pork Belly Buns", "Pork Sausage Roll", "Poutine", "Ricotta Stuffed Ravioli", "Risotto with Seafood", "Salmon Nigiri", "Scotch Eggs", "Seafood Paella", "Som Tam", "Souvlaki", "Stinky Tofu", "Sushi", "Tacos", "Teriyaki Chicken Donburi", "Tiramisù", "Tuna Sashimi", "Vegetable Soup"];

pool.query(sql, (err, dbRes) => {
    const img = 'http://via.placeholder.com/300x300';
for (let count = 0; count < 20; count++) {
    let sql = `insert into dishes (title, image_url) values ($1, $2);`;

    pool.query(sql, [sampleDishes[Math.floor(Math.random() * sampleDishes.length)], img],  (err, dbRes) => {
    })
}
})







 