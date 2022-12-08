// Beatriz e Ana Cláudia
import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('aquisicoes')
export default class Aquisicao {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Chaves estrangeiras
  @Column()
  fkFornecedor: string;

  @Column()
  fkLojista: string;

  // Atributos
  @Column({ type: 'timestamptz' })
  dataHoraAquisicao: string;

  @Column({ nullable: true })
  formaPagamento: string;

  @Column({ nullable: true })
  valorTotal: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.id = uuid();
    this.ativo = true;
    this.dataHoraAquisicao = new Date().toISOString();
  }
}
