// tinh 4 + 5
const request = require('request');


// request(url, (err, res, body) => {
//     if(err) return console.log(err.message);
//     console.log(body);
// });

function cong(a, b, cb) {
    const reqUrl = "http://localhost:3000/tinh/CONG/" + a + "/" + b;
    request(reqUrl, (err, res, body) => {
        if(err) return cb(err, null);
        cb(null, body);
    });
}

// cong(6, 5, function(err, result) {
//     if(err) return console.log(err);
//     console.log(result);
// })


function nhan(a, b, cb) {
    request("http://localhost:3000/tinh/NHAN/" + a + "/" + b, function(err, res, body) {
        if(err) return cb(err, null);
         cb(null, body);
    })
}

// nhan(2, 4, function(err, result) {
//     if (err) return console.log(err.message);
//      console.log(result);
// })

function chia(a, b, cb) {
    request("http://localhost:3000/tinh/CHIA/" + a + "/" + b, function(err, res, body) {
        if(err) return cb(err, null);
        cb(null, body);
    })
}

// chia(4, 2, function cb(err, result) {
//     if (err) return console.log(err);
//     console.log(result);
// });
















