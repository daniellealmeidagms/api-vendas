import UpdateLojistaService from '@services/lojista/UpdateLojistaService';
import { Request, Response } from 'express';

export default class UpdateLojistaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { razaoSocial, segmento, telefone, fkEndereco } = request.body;
    const service = new UpdateLojistaService();
    const result = await service.execute({
      id,
      razaoSocial,
      segmento,
      telefone,
      fkEndereco,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
