// Felipe e Ivan
import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('precos')
export default class Preco {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Atributos
  @Column({ nullable: true })
  valor: number;

  @Column({ nullable: true })
  dataInicioVigencia: Date;

  @Column({ nullable: true })
  dataFimVigencia: Date;

  @Column({ nullable: true })
  descricao: string;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.id = uuid();
    this.ativo = true;
  }
}
