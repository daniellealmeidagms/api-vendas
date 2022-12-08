// Diogo e Fernando
import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('vendas')
export default class Venda {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Chaves estrangeiras
  @Column()
  fkCliente: string;

  @Column()
  fkLojista: string;

  // Atributos
  @Column({ type: 'timestamptz' })
  dataHoraVenda: string;

  @Column({ nullable: true })
  formaPagamento: string;

  @Column({ nullable: true })
  vendaVarejo: boolean;

  @Column({ nullable: true })
  desconto: number;

  @Column({ nullable: true })
  valorFrete: number;

  @Column({ nullable: true })
  valorTotal: number;

  // Variáveis de controle
  @Column()
  enviada: boolean;

  @Column()
  ativo: boolean;

  constructor() {
    this.id = uuid();
    this.dataHoraVenda = new Date().toISOString();
    this.enviada = false;
    this.ativo = true;
  }
}
