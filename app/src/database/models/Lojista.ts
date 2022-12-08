// Pedro e Edu
import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('lojistas')
export default class Lojista {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Chaves estrangeiras
  @Column()
  fkEndereco: string;

  // Atributos
  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  razaoSocial: string;

  @Column({ nullable: true })
  segmento: string;

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
