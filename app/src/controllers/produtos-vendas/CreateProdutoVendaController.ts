import { CreateProdutoVendaService } from '@services/produtos-vendas/CreateProdutosVendasService';
import { Request, Response } from 'express';

export class CreateProdutoVendaController {
  async handle(request: Request, response: Response) {
    const { idProduto, idVenda } = request.body;
      const service = new CreateProdutoVendaService();
      const result = await service.execute({
        idProduto, idVenda
      });
      if (result instanceof Error) {
        return response.status(400).json(result.message);
      }
      return response.json(result);
  }
}
