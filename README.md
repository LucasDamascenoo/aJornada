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

O que é Fetch API?

Fetch api é uma função (nativa do js) assincrona que retorna dados de uma determinada api.
Fetch por padrão é uma requisição get(mas podemos alterar esse padrão inserindo no 2º parametro)

- Request (requisição)

Leva o nosso pedido para a aplicação que contem as informações.

- Response

São os dados que recebemos dependendo da solicitação.

## Sintaxe

- No primeiro parametro: é a URL da api onde vamos buscar os dados, a fetch api é uma requisição assincrona, ou seja: caso tenhamos mais códigos abaixo da requição, ele não vai esperar a api retornar dados e vai dar sequencia no código.

- then. : após lermos os dados de uma api, precisamos garantir que os dados foram lidos corretamente, ai entra o then() (tradução: depois da leitura da api, faça isso)

```javascript:

function pegarDados(){
  fetch('https://dadosdaapi')
  .then((resposta)=>{resposta.json})
  .then((dados)=> console.log(dados))
}
```

1º Then

Estamos criando uma função para a resposta da api (os dados requisitados) e transformando em Json para que possamos ler esses dados: Fetch api não tras os dados de cara pois tem algumas trativas como headers, resposta e etc.

2º then

Criamos mais uma função mas agora para podermos ler os dados carregados pelo json

# Dia 04

## UseState

Antes de entrarmos no assunto de Hooks, precisamos entender os tipos de componentes que temos dentro do React, basicamente são dois,classes e funções, **hooks no react não funciona em componentes de classes**

React trabalha com uma dom virtual, e com isso ele consegue estilizar um componente(alguma parte do site) individualmente sem precisar atualizar a página,mas para que isso ocorra, precisa está dentro de um state.

```JavaScript:

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function aumenta() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={aumenta}>Click para aumentar</button>
    </div>
  );
}

export default App;

```

## explicação:

No código acima, criamos um "componente" que atualiza o valor toda vez que o user clicou no botão.

Para atualizar o valor, precisamos utilizar o hook useState.

- Primeiro passo:

Para usar um hook do react, precisamos sempre importa-lo, por isso o :

```JavaScript:

import { useState } from "react";

```

- Segundo passo:

Criamos uma constante (destruction) onde o count é o valor e o setCount(por convensão, utilizamos o set+nome da variavel antgerior) é a função, que recebe o useState() que tem como Parametro o valor inicial.

```JavaScript:

 const [count, setCount] = useState(0);

```
