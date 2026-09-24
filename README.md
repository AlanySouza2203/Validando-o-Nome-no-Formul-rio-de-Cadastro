# Formulário de Cadastro com Jest

Projeto simples de front-end para demonstrar testes unitários com Jest.

**Professor:** Hudson Neves

## Estrutura

- `src/index.html`: formulário de cadastro
- `src/css/style.css`: estilos
- `src/js/cadastro.js`: interação com o formulário
- `src/js/validacao.js`: regras de validação
- `tests/validacao.test.js`: testes unitários

## Como executar os testes

Abra o terminal na pasta do projeto e execute:

```bash
npm install
npm test
```

## Como visualizar o formulário

Abra `src/index.html` no navegador. No VS Code, você também pode usar uma extensão de servidor local, como Live Server.

## Casos testados

1. Cadastro válido
2. Campo obrigatório vazio
3. E-mail inválido
4. Senha com menos de 6 caracteres
