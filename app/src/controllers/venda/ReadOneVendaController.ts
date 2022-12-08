import { Request, Response } from 'express';
import ReadOneVendaService from '@services/venda/ReadOneVendaService';

export default class ReadOneVendaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ReadOneVendaService();
    const result = await service.execute({ id });
    if(result instanceof Error){
      return response.status(404).json(result.message);
    }
    return response.json(result);
  }
}
