
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




// const a = 12;

// //local, consume menos memoria.
// let b = 10;

// //global
// var c = 18;

// let d = {
//     nombre: "Hal",
//     edad: 10,
//     escuela: "tec. 13",
//     contadorComida: 0,
//     horario: {
//         mat: 12,
//         quim: 13,
//         geo: 20
//     },
//     hermanos: [7,8,10,5],
//     comer: function () {
//         this.contadorComida++
//         console.log(this.contadorComida)
//     }
// }

// d.comer();