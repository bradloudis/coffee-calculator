const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const coffeeRecipe = [];

// TODO  - ROUTES BELOW HERE
// TODO - should be able to calculate weight of coffee needed for brew
//                                OR
//        should be able to calculate total water needed for brew (think weird amount of beans at end of bag)

//  GET get results of calculations ---> client side
app.get('/coffee', (req, res) => {
  res.send(coffeeRecipe);
});

// POST - for receiving coffee inputs from DOM , calculations
/*

req.body{
  coffeeWaterRatio: number (use parseInt)
  desiredVolume: number (use parseInt)
}
*/
app.post('/coffee', (req, res) => {
  const coffee = parseInt(req.body.coffeeWaterRatio);
  const volume = parseInt(req.body.desiredVolume);
  // coffee should come in from client side as a whole number.. multiplied by .001 to adjust for 'grams to Liter'
  console.log(coffee, volume);
  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
});
