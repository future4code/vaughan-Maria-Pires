import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());


app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});

//EXERCÍCIO 1
app.get("/ping", (req, res) => {
    res.send("Pong")
})

//EXERCÍCIO 2
type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//EXERCÍCIO 3
const arrayAfazeres: Afazer[] = [
    {userId: 1, id: 1, title: "lavar pratos", completed: true},
    {userId: 2, id: 2, title: "varrer a casa", completed: false},
    {userId: 2, id: 3, title: "passear com o cachorro", completed: true},
    {userId: 4, id: 4, title: "fazer o almoço", completed: false},
    {userId: 1, id: 5, title: "arrumar a cama", completed: true}
]

//EXERCÍCIO 4
const retornaApenasConcluidosOuEmAndamento = arrayAfazeres.filter((atividade) => {
    return atividade.completed === true || atividade.completed === false;
})
app.get("/afazeres", (req, res) => {
    res.status(200).send(retornaApenasConcluidosOuEmAndamento);
});

//EXERCICIO 5
//vou concluir o resto depois, precisei sair pra resolver algumas coisas e comecei tarde

