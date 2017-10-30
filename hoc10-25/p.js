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

function nhan(a, b) {
    return new Promise(function(resolve, reject) {
        request("http://localhost:3000/tinh/NHAN/" + a + "/" + b, (err, res, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

function chia(a, b) {
    return new Promise((resolve, reject) => {
        request("http://localhost:3000/tinh/CHIA/" + a + "/" + b, (err, res,result) => {
            if(err) return reject(err);
            resolve(result);
        })
    })
}

//Promise.all

// Promise.all([
//     cong(4, 5),
//     chia(6, 2)
// ])
// .then(arr => nhan(arr[0], arr[1]))
// .then(kq => console.log(kq))
// .catch(err => console.log(err));

// Promise.reject(new Error('Sai roi'))
// .catch(x => console.log(x))


Promise.race([
    cong(4, 5),
    chia(6, 2)
])
.then(kq => console.log(kq))
.catch(err => console.log(err));