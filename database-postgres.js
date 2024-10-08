import sql from './config-db.js'
import { randomUUID } from "node:crypto"

export class DatabasePostgreSQL {

    async list() {

    }

    async create(aluno) {
        const alunoID = randomUUID()
        let { name, email, age } = aluno
        await sql`INSERT INTO 
        students 
        (ID, NAME, EMAIL, AGE) 
        VALUES 
        (${alunoID}, ${name}, ${email}, ${age})`
    }

    async update() {

    }

    async delete() {

    }

}