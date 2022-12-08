import { Request, Response } from 'express';
import ReadOneFornecedorService from '@services/fornecedor/ReadOneFornecedorService';

export default class ReadOneFornecedorController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ReadOneFornecedorService();
    const result = await service.execute({ id });
    if(result instanceof Error){
      return response.status(404).json(result.message);
    }
    return response.json(result);
  }
}
