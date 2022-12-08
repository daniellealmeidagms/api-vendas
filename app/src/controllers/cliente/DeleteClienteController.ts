import DeleteClienteService from '@services/cliente/DeleteClienteService';
import { Request, Response } from 'express';

export default class DeleteClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteClienteService();
    const result = await service.execute({id});
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(300).json('Cliente excluído com sucesso!');
  }
}
