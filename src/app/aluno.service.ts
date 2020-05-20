import { Injectable } from '@angular/core';
import { Aluno } from '../interfaces/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private aluno: Aluno = {
    nome: 'Marcello Alves',
    idade: 24,
    ra: 11815743,
  };
  constructor() { }
  getAluno(): Aluno {
    return this.aluno;
  }
}
