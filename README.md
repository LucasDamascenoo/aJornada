# aJornada

# Dia 01

No primeiro dia dessa serie de desafios, aprendemos o que é o Vite, como usar e para que serve.

## O que é o vite?

Vite cria um ambiente de desenvolvimento para aplicações web, seje ele react/vue/svelte já configurado (Boielerplate) sem precisar de muitas configuração.
No nosso aprendizado vamos criar um ambiente react que anteriormente usavamos o Create React App(cra).

## Como usar o vite

Usando o NPM : npm create vite@lates

Após esse comando ele vai "perguntar" qual o nome do nosso projeto e em seguida qual o framework (no caso, react).

![Print](/Vite.png)

Após criar nosso projeto, devemos seguir os passos listamos ali

- cd nomeProjeto

Entrar na pasta que criamos

- npm install

Usamos esse comando para instalar o node_modules

- npm run dev

Para abrir o projeto ( será criado um localhost com a nossa aplicação)

# Dia 02

## Map

No Segundo dia aprendemos sobre o método de array map().

- Arrays

Arrays é uma estrutura de dado (objeto) do Javascript onde armazenamos qualquer tipo de dados (Listas).

- Método

Métodos são funções internas do Javascript(Built-in) que fazer uma determinação dependendo do tipo de dados

array.método()

- Map().

O Método Map() "itera" sobre um array possibilitando um novo array. O novo array sempre vai ter a quantidade de dados do array original, dentro do map, podemos usar 3 parametros (elemento, index e array).

- Elemento

É o proprio valor atribuido no array

- Index

Traz o index de cada valor atribuido

- Array

Trás a composição do proprio array.

```javascript:
const array1 = [1, 4, 8, 16];

const multiplicado = array1.map((x) => {
  return x * 2;
});

console.log(multiplicado);


```

# Dia 03

## Fetch API

- Request (requisição)

Leva o nosso pedido para a aplicação que contem as informações.

- Response

São os dados que recebemos dependendo da solicitação.
