import { AppDataSource } from '@database/datasource';
import Produto from '@database/models/Produto';

export default class ReadAllProdutoService {
  async execute() {
    const repo = AppDataSource.getRepository(Produto);
    const produtos = await repo.find({where: {ativo: true}});
    return produtos;
  }
}
