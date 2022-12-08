import { CreateProdutoPrecoService } from '@services/produtos-precos/CreateProdutosPrecosService';
import { Request, Response } from 'express';

export class CreateProdutoAquisicaoController {
  async handle(request: Request, response: Response) {
    const { idProduto, idPreco } = request.body;
      const service = new CreateProdutoPrecoService();
      const result = await service.execute({
        idProduto, idPreco
      });
      if (result instanceof Error) {
        return response.status(400).json(result.message);
      }
      return response.json(result);
  }
}
