const request = require("request");

function cong(a, b) {
    return new Promise(function(resolve, reject) {
        const reqUrl = "http://localhost:3000/tinh/CONG/" + a + "/" + b;
        request(reqUrl, (err, res, body) => {
           if (err) return reject(err);
           resolve(body);
        });
    });
}

// cong(4, 5)
// .then(x => console.log('Thanh cong: ' + x))
// .catch(err => console.log('That bai: ' + err));

//axios

//nhan
function nhan(a, b) {
    return new Promise(function(resolve, reject) {
        request("http://localhost:3000/tinh/NHAN/" + a + "/" + b, (err, res, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

// nhan(4, 5)
// .then(x => console.log(x))
// .catch(err => console.log(err))


//chia
function chia(a, b) {
    return new Promise((resolve, reject) => {
        request("http://localhost:3000/tinh/CHIA/" + a + "/" + b, (err, res,result) => {
            if(err) return reject(err);
            resolve(result);
        })
    })
}
// (4 + 5) * 6 / 2

// cong(4, 5)
// .then(tong => nhan(tong, 6))
// .then(tich => chia(tich, 2))
// .then(result => console.log(result))
// .catch(err => console.log(err.message));

// function tinhDienTich(a, b, h, cb) {
//     cong(a, b)
//     .then(tong => nhan(tong, h))
//     .then(tich => chia(tich, 2))
//     .then(result => cb(null, result))
//     .catch(err => cb(err, null));
// }

// tinhDienTich(4, 5, 6, (err, result) => {
//     if (err) return console.log(err.message);
//     console.log(result);
// })

// function tinhDienTich(a, b, h) {
//     return cong(a, b)
//     .then(tong => nhan(tong, h))
//     .then(tich => chia(tich, 2))
// }

async function tinhDienTich(a, b ,h) {
    const tong = await cong(a, b);
    const tich = await nhan(tong, h);
    const thuong = await chia(tich, 2);
    return thuong;
}

tinhDienTich(2, 4, 5)
.then(result => console.log(result))
.catch(err => console.log(err.message))

// (a + b) * h / 2
