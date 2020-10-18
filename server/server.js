const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// TODO  - ROUTES BELOW HERE

// TODO - GET get results of calculations ---> client side

// POST - for receiving coffee inputs from DOM , calculations

app.use(express.static('public'));
app.listen(PORT, () => {
  console.log('Listening on PORT: ', PORT);
});
