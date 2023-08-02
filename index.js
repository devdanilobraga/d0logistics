// Selecionando o elemento para exibir a mensagem de erro
const errorMessage = document.getElementById("error-message");

// Selecionando o formulário de login
const loginForm = document.querySelector(".login-form");

// Adicionando o ouvinte de evento para o link "Esqueci a senha"
forgotPasswordLink.addEventListener("click", function(event) {
  event.preventDefault();
  // Aqui você pode adicionar a lógica para tratar o clique no link de "Esqueci a senha"
  // Pode exibir um modal, redirecionar para outra página, etc.
});

// Adicionando o ouvinte de evento para o formulário de login
loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let emailInput = document.getElementById("email").value;
  let passwordInput = document.getElementById("password").value;
 
  const validEmail = "d0logistics@d0.com.br";
  const validPassword = "d0logistics";

  if (emailInput === validEmail && passwordInput === validPassword) {
    window.location.href = "/dashboard.html";
  } else {
    // Exibir mensagem de erro
    errorMessage.textContent = "Login ou senha incorretos. Tente novamente.";
    errorMessage.style.display = "block";
    document.getElementById("login-Form").reset();
  }
});

