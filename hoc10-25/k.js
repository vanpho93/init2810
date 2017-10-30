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

// (a + b) x h /2
function tinhDienTich(a, b, h, cb) {
    cong(a, b, function(errCong, resultCong) {
        if(errCong) return cb(errCong, null);
        nhan(resultCong, h, function(errNhan, resultNhan) {
            if(errNhan) return cb(errNhan, null);
            chia(resultNhan, 2, function(errNhan, result) {
                if (errNhan) return cb(errNhan, null);
                cb(null, result)
            });
        });
    });
}

tinhDienTich(4, 5, 6, function(err, result) {
    if (err) return console.log(err);
    console.log(result);
});
