import { randomUUID } from 'node:crypto'
import sql from './config-db.js'


export class DatabasePostgreSQL {

    async list(search = '') {
        let alunos
        if (search) {
            alunos = await sql`SELECT * FROM students WHERE name ILIKE ${'%' + search + '%'}`
        } else {
            alunos = await sql`SELECT * FROM students ORDER BY name ASC`
        }
        return alunos
    }

    async create(aluno) {
        const alunoId = randomUUID()
        const { name, email, age } = aluno
        await sql`INSERT INTO students (id, name, email, age) VALUES (${alunoId},
${name},${email},${age})`
    }

    async update(id, aluno) {
        const { name, email, age } = aluno
        await sql`UPDATE students SET name = ${name} , email = ${email} , age =
${age} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`DELETE FROM students WHERE id = ${id}`
    }
}