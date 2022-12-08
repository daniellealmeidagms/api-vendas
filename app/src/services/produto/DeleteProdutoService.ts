import { AppDataSource } from '@database/datasource';
import Produto from '@database/models/Produto';

type ProdutoRequest = { id: string };

export default class DeleteProdutoService {
  async execute({ id }: ProdutoRequest) {
    const repo = AppDataSource.getRepository(Produto);
    const produto = await repo.findOne({ where: { id } });
    if (!produto) {
      return new Error('Produto não encontrado!');
    }
    produto.ativo = false;
    await repo.save(produto);
    return produto;
  }
}
