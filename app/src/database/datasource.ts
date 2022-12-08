import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Aquisicoes from './models/Aquisicao';
import Cliente from './models/Cliente';
import Endereco from './models/Endereco';
import Fornecedor from './models/Fornecedor';
import Lojista from './models/Lojista';
import Preco from './models/Preco';
import Produto from './models/Produto';

//const bruce = new Cachorro();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api-vendas-teste',
  synchronize: true,
  logging: true,
  entities: [
    Aquisicoes,
    Cliente,
    Endereco,
    Fornecedor,
    Lojista,
    Preco,
    Produto,
  ],
  subscribers: [],
  migrations: [],
});
