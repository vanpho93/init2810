const request = require("request");

function cong(a, b, cb) {
    const reqUrl = "http://localhost:3000/tinh/CONG/" + a + "/" + b;
    request(reqUrl, (err, res, body) => {
        if(err) return cb(err, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    request("http://localhost:3000/tinh/NHAN/" + a + "/" + b, function(err, res, body) {
        if(err) return cb(err, null);
         cb(null, body);
    });
}

function chia(a, b, cb) {
    request("http://localhost:3000/tinh/CHIA/" + a + "/" + b, function(err, res, body) {
        if(err) return cb(err, null);
        cb(null, body);
    });
}

// (5 + 10) * 4 / 2;
// cong(5, 10, function(err, result) {
//     if(err) return console.log(err);
//     nhan(result, 4, function(errNhan, resultNhan) {
//         if(errNhan) return console.log(errNhan);
//         chia(resultNhan, 2, function(errChia, resultChia) {
//             if(errChia) return console.log(errChia);
//             console.log(resultChia);
//         });
//     });
// });



function tinhDienTichHinhThang(a, b, h, cb) {
    cong(a, b, function(err, result) {
        if(err) return cb(err);
        nhan(result, h, function(errNhan, resultNhan) {
            if(errNhan) return cb(errNhan);
            chia(resultNhan, 2, function(errChia, resultChia) {
                if(errChia) return cb(errChia);
                cb(null, resultChia);
            })
        })
    })
}
// tinhDienTichHinhThang(4, 5, 6, (err, result) => {
//     if(err) return console.log(err.message);
//     console.log(result);
// });
