import { AppDataSource } from 'src/database/datasource';
import  Fornecedor from '@database/models/Fornecedor';

export default class ReadAllFornecedorService {
  async execute() {
    const repo = AppDataSource.getRepository(Fornecedor);
    const fornecedores = await repo.find({where: {ativo: true}});
    return fornecedores;
  }
}
