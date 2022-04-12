import express from 'express';
import cors from 'cors';


const app = express()

app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//EXERCÍCIO 1
app.get('/', (req, res) => {
    res.send("Hello, world!")
});

//EXERCÍCIO 2

type Usuario = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//EXERCICIO 3
const arrayUsuarios: Usuario[] = [
    { id: 1, name: "Maria", phone: 7481794, email: "maria@gmail.com", website: "www.maria.com" },
    { id: 2, name: "Eduarda", phone: 23923, email: "eduarda@gmail.com", website: "www.eduarda.com" },
    { id: 3, name: "Letícia", phone: 23739274, email: "leticia@gmail.com", website: "www.leticia.com" },
    { id: 4, name: "José", phone: 43955933, email: "jose@gmail.com", website: "www.jose.com" },
    { id: 5, name: "Fausto", phone: 974734, email: "fausto@gmail.com", website: "www.fausto.com" }
]

// EXERCICIO 4
app.get("/usuarios", (req, res) => {
    res.status(200).send(arrayUsuarios);
});



//EXERCÍCIO 5
type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//EXERCÍCIO 6
const arrayPosts: Posts[] = [
    { id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", userId: 1 },
    { id: 2, title: "bwuqiejkewkf", body: "r0e874mvkdsnfskerkle", userId: 3},
    { id: 3, title: "skfoji4u3o8r", body: "ioer853uoe", userId: 2},
    { id: 4, title: "4903ioer", body: "krekoiu4i", userId: 1},
    { id: 5, title: "9035je", body: "9024rjovmk", userId: 4}
]

//EXERCÍCIO 7
app.get("/posts", (req, res) => {
    res.status(200).send(arrayPosts);
});

//EXERCÍCIO 8
