const request = require('request');

const url = '/api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

// request(url + 'Portland', (err, res, body) => {
//     const obj = JSON.parse(body);
//     console.log(obj.main.temp);
// });

function getTempByCityName(cityName, cb) {
    request(url + cityName, (err, res, body) => {
        if (err) return cb(err, null);
        const obj = JSON.parse(body);
        cb(null, obj.main.temp);// console.log(obj.main.temp)
    });
}

// getTempByCityName('Hanoi', console.log);
getTempByCityName('', (err, temp) => {
    if (err) return console.log(err.message);
    console.log(temp);
});
// getTempByCityName('Hanoi', (err, temp) => console.log('Nhiet do: ' + temp));
