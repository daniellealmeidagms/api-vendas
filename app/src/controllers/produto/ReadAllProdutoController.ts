import { Response } from 'express';
import ReadAllProdutoService from '@services/produto/ReadAllProdutoService';

export default class ReadAllProdutoController {
  async handle(response: Response) {
    const service = new ReadAllProdutoService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhum produto cadastrado!');
    }
    return response.json(result);
  }
}
