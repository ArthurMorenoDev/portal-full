const express = require("express");
// const mysql = require("mysql");
const path = require('path');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Importa as rotas de autenticação

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Para aceitar JSON

app.use('/', authRoutes);
  







// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'users_db',
//     password: ''
    
// });

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

app.set('view engine', 'html');

// PARA CONECTAR BANCO DE DADOS POSTERIORMENTE//

// db.connect((error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log('MYSQL conectado...')
//     }
// });

//  db.query('SELECT * FROM usuarios', (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(results);
//     }
//   });

// PARA CONECTAR BANCO DE DADOS POSTERIORMENTE//


//definindo rotas
app.get('/', (req, res) => {
  res.render('index'); // Renderiza a página inicial
});



app.use(express.json());

app.post('/login',(req, res) => {
  const {login, senha }= req.body;



  
})




app.listen(5000, () => {
    console.log("Server started port 5000");
})