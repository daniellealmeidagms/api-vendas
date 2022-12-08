import { Request, Response } from 'express';
import CreateClienteService from '@services/cliente/CreateClienteService';

export default class CreateClienteController {
  async handle(request: Request, response: Response) {
    const { cpf_cnpj, nome_razaosocial, tipoPessoa, telefone, fkEndereco } = request.body;
    const service = new CreateClienteService();
    const result = await service.execute({
      cpf_cnpj,
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
