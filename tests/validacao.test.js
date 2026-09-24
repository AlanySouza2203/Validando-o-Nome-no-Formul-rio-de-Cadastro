const validarCadastro = require("../src/js/validacao");

describe("Testes do formulário de cadastro", () => {

  test("deve aceitar um cadastro válido", () => {
    const resultado = validarCadastro("Maria", "maria@email.com", "123456");

 
    expect(resultado.valido).toBe(true);
    expect(resultado.mensagem).toBe("Cadastro realizado com sucesso!");
  });

  test("deve rejeitar campos vazios", () => {
    const resultado = validarCadastro("", "maria@email.com", "123456");

   
    expect(resultado.valido).toBe(false);
    expect(resultado.mensagem).toBe("Todos os campos são obrigatórios");
  });


  test("deve rejeitar e-mail inválido", () => {
    const resultado = validarCadastro("Maria", "mariaemail.com", "123456");

   
    expect(resultado.valido).toBe(false);
    expect(resultado.mensagem).toBe("E-mail inválido");
  });

  
  test("deve rejeitar senha menor que 6 caracteres", () => {
    const resultado = validarCadastro("Maria", "maria@email.com", "123");

   
    expect(resultado.valido).toBe(false);
    expect(resultado.mensagem).toBe("A senha deve ter pelo menos 6 caracteres");
  });

  test("deve rejeitar nome contendo apenas espaços", () => {
    const resultado = validarCadastro(" ", "maria@email.com", "123456");

    expect(resultado.valido).toBe(false);
    expect(resultado.mensagem).toBe("Todos os campos são obrigatórios");
  });

  test("deve rejeitar nome com menos de 3 caracteres", () => {
    const resultado = validarCadastro("Al", "maria@email.com", "123456");

    expect(resultado.valido).toBe(false);
    expect(resultado.mensagem).toBe("O nome deve ter pelo menos 3 caracteres");
  });

  test("deve rejeitar nome com menos de 3 caracteres desconsiderando espaços", () => {
    const resultado = validarCadastro(" Al ", "maria@email.com", "123456");

    expect(resultado.valido).toBe(false);
    expect(resultado.mensagem).toBe("O nome deve ter pelo menos 3 caracteres");
  });

  test("deve aceitar nome válido com 3 caracteres", () => {
    const resultado = validarCadastro("Ana", "maria@email.com", "123456");

    expect(resultado.valido).toBe(true);
    expect(resultado.mensagem).toBe("Cadastro realizado com sucesso!");
  });

  test("deve aceitar nome válido com espaços nas pontas", () => {
    const resultado = validarCadastro(" Ana ", "maria@email.com", "123456");

    expect(resultado.valido).toBe(true);
    expect(resultado.mensagem).toBe("Cadastro realizado com sucesso!");
  });
});
