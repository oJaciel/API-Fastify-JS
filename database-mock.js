import { randomUUID } from "crypto"

export class DatabaseMock {
    
    #alunos = new Map()

    //Listar os alunos / Simula um select na tabela
    list() {
        return Array.from(this.#alunos.entries())
    }

    //Criar um aluno / Simula um insert na tabela
    create(aluno) {
        const alunoId = randomUUID()
        this.#alunos.set(alunoId, aluno)    
    }

    //Atualizar um aluno / Simula um update na tabela
    update(id, aluno) {
        this.#alunos.set(id, aluno)
    }

    //Deletar um aluno / Simula um delete na tabela
    delete(id) {
        this.#alunos.delete(id)
    }
}