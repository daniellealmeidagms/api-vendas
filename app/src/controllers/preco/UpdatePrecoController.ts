import { Request, Response } from 'express';
import UpdatePrecoService from '@services/preco/UpdatePrecoService';

export default class UpdatePrecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { valor, descricao, dataInicioVigencia, dataFimVigencia } = request.body;
    const service = new UpdatePrecoService();
    const result = await service.execute({ id, valor, descricao, dataInicioVigencia, dataFimVigencia });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
