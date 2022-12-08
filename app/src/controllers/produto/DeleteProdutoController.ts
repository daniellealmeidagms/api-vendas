import { Request, Response } from 'express';
import DeleteProdutoService from '@services/produto/DeleteProdutoService';

export default class DeleteProdutoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteProdutoService();
    const result = await service.execute({id});
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(300).json('Produto excluído com sucesso!');
  }
}
