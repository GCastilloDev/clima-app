const axios = require('axios');



const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '89cebbda44mshbc3d13178f98e85p187da4jsne5e8271d033c' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = response.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}