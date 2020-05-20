import { Injectable } from '@angular/core';
import { Alunos } from './alunos/alunos.module'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  aluno: Alunos = {
    nome: "Brener Eduardo Rodrigues",
    idade: 20,
    RA: 11815382
  }
    ;

  constructor() { }

  async getAluno() {
    return await this.aluno;
  }
}
