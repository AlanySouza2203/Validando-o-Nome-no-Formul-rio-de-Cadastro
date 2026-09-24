function validarCadastro(nome, email, senha) {
  if (!nome || !email || !senha || !nome.trim()) {
    return {
      valido: false,
      mensagem: "Todos os campos são obrigatórios"
    };
  }

  if (nome.trim().length < 3) {
    return {
      valido: false,
      mensagem: "O nome deve ter pelo menos 3 caracteres"
    };
  }

  if (!email.includes("@")) {
    return {
      valido: false,
      mensagem: "E-mail inválido"
    };
  }

  if (senha.length < 6) {
    return {
      valido: false,
      mensagem: "A senha deve ter pelo menos 6 caracteres"
    };
  }

  return {
    valido: true,
    mensagem: "Cadastro realizado com sucesso!"
  };
}

if (typeof module !== "undefined") {
  module.exports = validarCadastro;
}
