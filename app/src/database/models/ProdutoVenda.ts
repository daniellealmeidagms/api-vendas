import { Entity, PrimaryColumn } from 'typeorm';

@Entity('produtos_vendas')
export default class ProdutoVenda {
  // Chave primária
  @PrimaryColumn()
  idProduto: string;

  @PrimaryColumn()
  idVenda: string;
}