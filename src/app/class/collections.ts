export class Collections {
  id: number;
  colecao: string;
  responsavel: string;
  estacao: string;
  marca: string;
  orcamento: string;
  anoLancamento: string;

  constructor(
    id: number,
    colecao: string,
    responsavel: string,
    estacao: string,
    marca: string,
    orcamento: string,
    anoLancamento: string
  ) {
    this.id = id;
    this.colecao = colecao;
    this.responsavel = responsavel;
    this.estacao = estacao;
    this.marca = marca;
    this.orcamento = orcamento;
    this.anoLancamento = anoLancamento;
  }
}
