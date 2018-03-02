const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = 3001;

const restCtrl = require('./controllers/restaurantController');

app.get('/api/restaurants', restCtrl.getRestaurants);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})