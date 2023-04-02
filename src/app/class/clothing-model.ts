export class ClothingModels {
  id: number;
  nome: string;
  tipo: string;
  responsavel: string;
  colecao: string;
  bordado: string;
  estampa: string;

  constructor(
    id: number,
    nome: string,
    tipo: string,
    responsavel: string,
    colecao: string,
    bordado: string,
    estampa: string
  ) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.responsavel = responsavel;
    this.colecao = colecao;
    this.bordado = bordado;
    this.estampa = estampa;
  }
}
