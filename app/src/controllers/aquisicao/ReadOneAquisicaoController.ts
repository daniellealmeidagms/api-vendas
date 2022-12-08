import { Request, Response } from 'express';
import ReadOneAquisicaoService from '@services/aquisicao/ReadOneAquisicaoService';

export default class ReadOneAquisicaoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ReadOneAquisicaoService();
    const result = await service.execute({ id });
    if(result instanceof Error){
      return response.status(404).json(result.message);
    }
    return response.json(result);
  }
}
