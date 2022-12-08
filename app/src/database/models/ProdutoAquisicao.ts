import { Entity, PrimaryColumn } from 'typeorm';

@Entity('produtos_aquisicoes')
export default class ProdutoAquisicao {

  @PrimaryColumn()
  idProduto: string;

  @PrimaryColumn()
  idAquisicao: string;
}