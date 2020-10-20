const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const coffeeRecipe = [];

// TODO  - ROUTES BELOW HERE

//  GET get results of calculations ---> client side

app.get('/coffee', (req, res) => {
  res.send(coffeeRecipe);
});

// POST - for receiving coffee inputs from DOM , calculations

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
});
