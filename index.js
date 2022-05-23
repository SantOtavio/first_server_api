const express = require(`express`);
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/home", (req, res) => {
  res.send("Hello, World, HOME!");
});

//GET - Buscar informações // req.query
//POST - Criar informações // req.body
//PUT - Alterar informações // req.body
//DELETE - Deletar informações // req.params
//OPTIONS - Dizer informações que o servidor pode responder // Não utiliza

let listaPessoas = [
  {
    id: "1",
    name: "Otavio",
  },
  {
    id: "2",
    name: "João",
  },
  {
    id: "3",
    name: "Gustavo",
  },
  {
    id: "4",
    name: "Leonardo",
  },
];

app.get("/api/pessoas", (req, res) => {
  res.json(listaPessoas);
});

app.post("/api/pessoas", (req, res) => {
  const pessoa = req.body;
  pessoa.id = listaPessoas.length + 1;
  listaPessoas.push(pessoa);
  res.json(pessoa);
});

app.put("/api/pessoas/:id", (req, res) => {
  const id = req.params.id;
  const pessoa = req.body;
  const index = listaPessoas.findIndex((p) => p.id == id);
  listaPessoas[index] = pessoa;
  res.json(pessoa);
});

app.get("/api/pessoas/:id", (req, res) => {
  const id = req.params.id;
  const pessoa = listaPessoas.find((p) => p.id == id);
  res.json(pessoa);
});

app.delete("/api/pessoas/:id", (req, res) => {
  const id = req.params.id;
  const index = listaPessoas.findIndex((p) => p.id == id);
  listaPessoas.splice(index, 1);
  res.json(listaPessoas);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
