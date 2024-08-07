const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const loginInput = document.getElementById('login');
  const senhaInput = document.getElementById('senha');
  

  const loginData = {
    login: loginInput.value,
    senha: senhaInput.value
  };

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
        
    });


    if (response.ok) { // Verifica se a resposta foi bem-sucedida
      // Login bem-sucedido, redirecionar o usuário para a dashboard
      console.log('Login successful');
        console.log(response)
      window.location.href = './dashboard2.html'; // Redireciona para a página dashboard2
      
    } else {
      // Exibir uma mensagem de erro
      console.error('Login failed');
      alert('Usuário ou senha inválidos. Tente novamente.'); // Exibe um alerta de erro
    }
  } catch (error) {
    console.error('Error during login:', error); // Captura e imprime erros
    alert('Ocorreu um erro durante o login.'); // Exibe um alerta de erro
  }

});


