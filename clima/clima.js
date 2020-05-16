const axios = require('axios');



const getClima = async(lat, long) => {

    const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0f45fc5d51560cba4cc5c8837ff9d0d0&units=metric`
    );

    return response.data.main.temp;
}

module.exports = {
    getClima
}