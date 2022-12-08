import { Request, Response } from 'express';
import UpdateProdutoService from '@services/produto/UpdateProdutoService';

export default class UpdateProdutoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { descricao, tamanho, categoria, fkPreco, qtdEstoque } = request.body;
    const service = new UpdateProdutoService();
    const result = await service.execute({
      id,
      descricao,
      tamanho,
      categoria,
      fkPreco,
      qtdEstoque,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
