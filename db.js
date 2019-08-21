var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node'
});
 
connection.connect();
 
connection.query('SELECT 1+1 as solution', function (error, results, fields) {
  if (error) throw error;


//   for (let i = 0; i < results.length; i++){
// //    console.log("Hola soy " + results[i].nombre)
// //    console.log(`Hola soy ${results[i].nombre}`)
//     console.log(`Hola soy ${results[i].nombre}`)
//   }

});
connection.query('DELETE FROM usuario WHERE id = 6', function (error, results, fields) {
    if (error) throw error;  
  });
connection.query('INSERT INTO usuario VALUES (6,"jacinto", 666)', function (error, results, fields) {
    if (error) throw error;  
  });

  connection.query('UPDATE usuario SET nombre = "TEST" WHERE id = 2', function (error, results, fields) {
    if (error) throw error;  
  });

  connection.query('DELETE FROM usuario WHERE id = 3', function (error, results, fields) {
    if (error) throw error;  
  });

  connection.query('SELECT * FROM usuario', function (error, res, fields) {
    if (error) throw error;
    
    //for (let i = 0; i < res.length; i++){
        console.log(res)
//  }
  });








/*
INSERTAR UNA TUPLA
ACTUALIZAR LA SEGUNDA TUPLA (ID 2), EL NOMBRE SE ACTUALIZA COMO "TEST
BORRAR ID 3
PROYECTAR NUEVA TABLA
*/

connection.end();