const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config()

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

const restCtrl = require('./controllers/restaurantController');

app.get('/api/restaurants', restCtrl.getRestaurants);

const path = require('path')

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/../build/index.html'));
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})