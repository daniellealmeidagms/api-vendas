import { Request, Response } from 'express';
import ReadOnePrecoService from '@services/preco/ReadOnePrecoService';

export default class ReadOnePrecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ReadOnePrecoService();
    const preco = await service.execute({ id });
    if (preco instanceof Error) {
      response.status(404).json(preco.message);
    }
    return response.json(preco);
  }
}
