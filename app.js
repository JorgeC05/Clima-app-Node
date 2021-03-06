const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el Clima',
        deman: true
    }
}).argv;

let getInfo = async (direccion) => {

    try{
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
    
        return `El clima en ${coors.direccion} es de ${temp}°C `
    }catch(e){
        return `No se pudo determinar el Clima en ${direccion}`;
    }   
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));