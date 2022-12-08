import { Entity, PrimaryColumn } from 'typeorm';

@Entity('produtos_precos')
export default class ProdutoPreco {
  // Chave primária
  @PrimaryColumn()
  idProduto: string;

  @PrimaryColumn()
  idPreco: string;
}