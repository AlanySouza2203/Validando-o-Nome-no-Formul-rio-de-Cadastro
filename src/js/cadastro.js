const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const resultado = validarCadastro(nome, email, senha);
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = resultado.mensagem;
  mensagem.style.color = resultado.valido ? "green" : "red";
});
