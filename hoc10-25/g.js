const request = require("request");
//khai bao function //phai return no ko the return dc thi xu dung cb//
const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

function getWeather(cityName, cb) {
    request(url + cityName, function(err, res, body) {
        if(err) return cb(err, null);
        cb(null, body);
    })
}

//thuc thi //
// getWeather("Hanoi", (err, result) => {
//     if (err) return console.log(err.message);
//     console.log(result);
// })









































function tinhNhietDo(a, cb) {
  request("http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=" + a, (err, res, result) => {
    if (err) cb(err, null);
    cb(null, result);
  })
}

tinhNhietDo("Portland", (err, result) => {
  if (err) console.log(err);
  console.log(result);
})
