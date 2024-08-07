function voltarInicio() {
  console.log('vai se fuder')
    window.location.replace('index.html');
  }

function cadastrarUsuario(username,email, password) {
    // Salvando as informações no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    if (email === '' || password === '') {
      alert('Preencha todos os campos.');
      return;
    }
    else{
      alert('cadastro feito com sucesso');
    }
  }


  document.querySelector('button').addEventListener('click', voltarInicio);