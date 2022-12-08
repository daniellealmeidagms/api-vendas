import { Request, Response } from 'express';
import ReadOneEnderecoService from '@services/endereco/ReadOneEnderecoService';

export default class ReadOneEnderecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ReadOneEnderecoService();
    const result = await service.execute({ id });
    if(result instanceof Error){
      return response.status(404).json(result.message);
    }
    return response.json(result);
  }
}
