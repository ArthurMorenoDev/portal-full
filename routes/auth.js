const { ok } = require('assert');
const express = require('express');
const fs = require('fs');
const path = require('path');
const { send } = require('process');
const router = express.Router();
const session = require('express-session');






    const getLoginData = ()=>{
        const dataPath = path.join(__dirname, '../data/loginData.json');
        const data = fs.readFileSync(dataPath);
        return JSON.parse(data);

        
    }
    console.log(getLoginData());
 
    //teste //

// Rota para processar o login
router.post('/login', (req, res) => {
    const { login, senha } = req.body;
    console.log(login, senha);
    const loginData = getLoginData(); // Lê os dados de login do arquivo

    // Verifica se as credenciais estão corretas
    const user = loginData.find(user => user.login === login && user.senha === senha);

    if (user) {
        // Redireciona para a dashboard se as credenciais forem válidas
        res.status(200).send('Welcome')
        // res.redirect('/dashboard2');
    } else {
        // Mensagem de erro
        res.status(401).send('Usuário ou senha inválidos.');
    }
});

module.exports = router;
