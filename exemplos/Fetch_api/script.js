function fetchApiData() {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      const list = document.querySelector("#fill_list");

      data.map((item) => {
        const li = document.createElement("li");
        li.setAttribute("id", item.id);
        li.innerHTML = item.title;
        list.appendChild(li);
      });
    });
}

// utilizando a função fetch (nativa do js) para pegar os dados da api, 1 : 2º param: tipo da requisição(get/post/delet/update )
