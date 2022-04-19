import express from 'express';
import cors from 'cors';
import { Request } from 'express';
import { Response } from 'express';

const app = express()
app.use(express.json())
app.use(cors())


type infosExtrato = {
    valor: number,
    data: Date,
    descricao: string
}

type Cliente = {
    nome: string,
    cpf: string,
    dataNascimento: Date,
    saldo: number,
    extratos: infosExtrato[]
}

const clientes: Cliente[] = []

app.post("/criar-usuario", (req: Request, res: Response) => {
    try {
        const { nome, cpf, dataNascimento } = req.body
        const [dia, mes, ano] = dataNascimento.split("/")
        const dataNasc: Date = new Date(`${ano}-${mes}-${dia}`)
        const idade: number = Date.now() - dataNasc.getTime()
        const idadeEmAnos: number = idade / 1000 / 60 / 60 / 24 / 365

        if(idadeEmAnos < 18){
           res.status(406).send("A idade do usuário deve ser maior ou igual a 18 anos.")
        }
        const novoCliente: Cliente = {
            nome,
            cpf,
            dataNascimento: dataNasc,
            saldo: 0,
            extratos: []
        };

        clientes.push(novoCliente);
        res.status(201).send("A sua conta foi criada com sucesso!")
    }
    catch (error) {
        res.status(400).send(error)
    }
})

app.get("/usuarios", (req: Request, res: Response) => {
    try{
        res.status(200).send(clientes)
    }
    catch(error){
        res.status(400).send(error)
    }
})
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

