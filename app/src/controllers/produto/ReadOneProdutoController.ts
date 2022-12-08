import { Request, Response } from 'express';
import ReadOneProdutoService from '@services/produto/ReadOneProdutoService';

export default class ReadOneProdutoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ReadOneProdutoService();
    const result = await service.execute({ id });
    if(result instanceof Error){
      return response.status(404).json(result.message);
    }
    return response.json(result);
  }
}
