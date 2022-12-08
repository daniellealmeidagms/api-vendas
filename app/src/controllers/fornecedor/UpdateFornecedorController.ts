import UpdateFornecedorService from '@services/fornecedor/UpdateFornecedorService';
import { Request, Response } from 'express';

export default class UpdateFornecedorController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { razaoSocial, telefone, fkEndereco } = request.body;
    const service = new UpdateFornecedorService();
    const result = await service.execute({
      id,
      razaoSocial,
      telefone,
      fkEndereco,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
