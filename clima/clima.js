const axios = require('axios');

const getClima = async (lat, lon) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=aef73966478d20ddcc895d294b78d37d`)
    // console.log(resp.data.main.temp);
    let temp = resp.data.main.temp;

    return temp;
}


module.exports = {
    getClima
}
