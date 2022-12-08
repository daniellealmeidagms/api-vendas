import { Request, Response } from 'express';
import DeleteVendaService from '@services/venda/DeleteVendaService';

export default class DeleteVendaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteVendaService();
    const result = await service.execute({id});
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(300).json('Venda excluída com sucesso!');
  }
}
