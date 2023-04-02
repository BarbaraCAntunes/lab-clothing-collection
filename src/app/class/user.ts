export class User {
  id: number;
  nome: string;
  empresa: string;
  email: string;
  senha: string;
  [key: string]: any;

  constructor(
    id: number,
    nome: string,
    empresa: string,
    email: string,
    senha: string
  ) {
    this.id = id;
    this.nome = nome;
    this.empresa = empresa;
    this.email = email;
    this.senha = senha;
  }
}
