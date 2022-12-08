import DeleteEnderecoService from '@services/endereco/DeleteEnderecoService';
import { Request, Response } from 'express';

export default class DeleteEnderecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteEnderecoService();
    const result = await service.execute({id});
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(300).json('Endereço excluído com sucesso!');
  }
}
