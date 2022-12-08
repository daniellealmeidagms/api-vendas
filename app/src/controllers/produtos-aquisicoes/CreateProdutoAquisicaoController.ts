import { CreateProdutoAquisicaoService } from '@services/produtos-aquisicoes/CreateProdutoAquisicaoService';
import { Request, Response } from 'express';

export class CreateProdutoAquisicaoController {
  async handle(request: Request, response: Response) {
    const { idProduto, idAquisicao } = request.body;
      const service = new CreateProdutoAquisicaoService();
      const result = await service.execute({
        idProduto, idAquisicao
      });
      if (result instanceof Error) {
        return response.status(400).json(result.message);
      }
      return response.json(result);
  }
}
