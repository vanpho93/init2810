const request = require("request");

function chia(a, b, cb) {
  request("http://localhost:3000/tinh/CHIA/" + a + "/" + b, (err, res, result) => {
    if (err) return cb(err, null);
    cb(null, result);
  })
}

// chia(4, 2, function(err, result) {
//   if (err) return console.log(err.message);
//   console.log(result);
// })


function cong(a, b, cb) {
  request("http://localhost:3000/tinh/CONG/" + a + "/" + b, (err, res, result) => {
    if (err) cb(err, null);
    cb(null, result);
  })
}

// cong(2, 4, (err, result) => {
//   if(err) console.log(err);
//   console.log(result)
// })

 function nhan(a, b ,cb) {
   request("http://localhost:3000/tinh/NHAN/" + a + "/" + b, (err, res, result) => {
     if (err) cb(err, null);
     cb(null, result);
   })
 }

// nhan(2, 4, (err, result) => {
//   if(err) console.log(err.message);
//   console.log(result);
// })

(5 + 10) * 4 / 2;

function tinhDienTich(a, b, h, cb) {
  cong(a, b, (errCong, resultCong) => {
    if (errCong) cb(errCong);
    nhan(resultCong, h, (errNhan, resultNhan) => {
      if(errNhan) cb(errNhan);
      chia(resultNhan, 2, (errChia, resultChia) => {
        if(errChia) cb(errChia);
        cb(null, resultChia);
      })
    })
  })
}

tinhDienTich(5, 10, 4, (err, result) => {
  if (err) console.log(err.message);
  console.log(result);
})
