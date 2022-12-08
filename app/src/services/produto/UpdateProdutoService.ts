import { AppDataSource } from '@database/datasource';
import Produto from '@database/models/Produto';

type UpdateProdutoRequest = {
  id: string;
  descricao: string;
  tamanho: string;
  categoria: string;
  fkPreco: string;
  qtdEstoque: number;
};

export default class UpdateProdutoService {

  async execute({
    id,
    descricao,
    tamanho,
    categoria,
    fkPreco,
    qtdEstoque,
  }: UpdateProdutoRequest): Promise<Produto | Error> {
    
    const repo = AppDataSource.getRepository(Produto);

    const produto = await repo.findOne({ where: { id } });

    if (!produto) {
      return new Error('Produto não encontrado!');
    }

    produto.descricao = descricao ? descricao : produto.descricao;
    produto.tamanho = tamanho ? tamanho : produto.tamanho;
    produto.categoria = categoria ? categoria : produto.categoria;
    produto.fkPreco = fkPreco ? fkPreco : produto.fkPreco;
    produto.qtdEstoque = qtdEstoque ? qtdEstoque : produto.qtdEstoque;

    await repo.save(produto);

    return produto;
  }
}
