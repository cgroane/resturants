const axios = require('axios');
apiURL = 'https://s3.amazonaws.com/br-codingexams/restaurants.json'

module.exports = {
    getRestaurants: (req, res, next) => {
       return axios.get(apiURL).then(result => res.status(200).send(result.data.restaurants)).catch((err) => res.status(500).send(err))
    }
}