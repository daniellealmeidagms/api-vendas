import UpdateClienteService from '@services/cliente/UpdateClienteService';
import { Request, Response } from 'express';

export default class UpdateClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { nome_razaosocial, tipoPessoa, telefone, fkEndereco } =
      request.body;
    const service = new UpdateClienteService();
    const result = await service.execute({
      id,
      nome_razaosocial, 
      tipoPessoa, 
      telefone, 
      fkEndereco,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
