import { Request, Response } from 'express';
import ReadOneClienteService from '@services/cliente/ReadOneClienteService';

export default class ReadOneClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ReadOneClienteService();
    const result = await service.execute({ id });
    if(result instanceof Error){
      return response.status(404).json(result.message);
    }
    return response.json(result);
  }
}
