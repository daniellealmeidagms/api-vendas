import DeleteLojistaService from '@services/lojista/DeleteLojistaService';
import { Request, Response } from 'express';

export default class DeleteLojistaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteLojistaService();
    const result = await service.execute({ id });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(300).json('Lojista excluído com sucesso!');
  }
}
