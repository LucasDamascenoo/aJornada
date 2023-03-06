//fetch é uam função e como parametro devemos passar o endereço da api
// por padrao um fetch faz uma requisição (get) só pega os dados
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
