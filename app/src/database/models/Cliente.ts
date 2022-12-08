// Jeovana e Welita
import { v4 as uuid } from 'uuid';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('clientes')
export default class Cliente {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Chave estrangeira
  @Column()
  fkEndereco: string;

  // Atributos
  @Column({ nullable: true })
  cpf_cnpj: string;

  @Column({ nullable: true })
  nome_razaosocial: string;

  @Column({ nullable: true })
  tipoPessoa: string;

  @Column({ nullable: true })
  telefone: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.id = uuid();
    this.ativo = true;
  }
}
