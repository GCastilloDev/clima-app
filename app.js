const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc: "Ciudad que se requiere saber el clima",
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(18.15, -94.4167)
//     .then(console.log);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}°`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);