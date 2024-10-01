import { fastify } from "fastify";
import { DatabaseMock } from "./database-mock.js";

const server = fastify()

const database = new DatabaseMock()


server.get('/', () => {
    return 'Olá, bem vindo ao servidor'
})

server.get('/alunos', () => {
    return 'Aqui a lista de alunos'
})

server.post('/alunos', (request, reply) => {
    database.create({
        name: request.body.name,
        email: request.body.email,
        age: request.body.age
    })
    console.log(database.list())
    return reply.status(201).send()
})

server.put('/alunos/:id', () => {
    return 'Aqui atualiza / altera um aluno'
})

server.delete('/alunos/:id', () => {
    return 'Aqui deleta um aluno'
})

server.listen({
    port: 3333
})