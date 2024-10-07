import { fastify } from "fastify";
import { DatabaseMock } from "./database-mock.js";

const server = fastify()

const database = new DatabaseMock()


server.get('/', () => {
    return 'Olá, bem vindo ao servidor'
})

server.get('/alunos', () => {
    return database.list()
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

server.put('/alunos/:id', (request, reply) => {
    const id = request.params.id
    database.update(id, {
        name: request.body.name,
        email: request.body.email,
        age: request.body.age
    })
    return reply.status(204).send()
})

server.delete('/alunos/:id', (request, reply) => {
    const id = request.params.id
    database.delete(id);
    return reply.status(204).send
})

server.listen({
    port: 3333
})