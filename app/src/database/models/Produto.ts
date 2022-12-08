// Tiago e Karol
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('produtos')
export default class Produto {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Chave estrangeira
  @Column({nullable: true})
  fkPreco: string;

  // Atributos
  @Column({nullable: true})
  descricao: string;

  @Column({nullable: true})
  tamanho: string;

  @Column({nullable: true})
  categoria: string;

  @Column({nullable: true})
  qtdEstoque: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  /*
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  */

  constructor() {
    this.id = uuid();
    this.ativo = true;
  }
}
