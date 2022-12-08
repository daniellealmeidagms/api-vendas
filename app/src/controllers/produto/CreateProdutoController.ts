import { Request, Response } from 'express';
import CreateProdutoService from '@services/produto/CreateProdutoService';

export default class CreateProdutoController {
  async handle(request: Request, response: Response) {
    const { descricao, tamanho, categoria, fkPreco, qtdEstoque } = request.body;

    const service = new CreateProdutoService();

    const result = await service.execute({
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
