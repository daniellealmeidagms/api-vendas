import { Response } from 'express';
import ReadAllPrecoService from '@services/preco/ReadAllPrecoService';

export default class ReadAllPrecoController {
  async handle(response: Response) {
    const service = new ReadAllPrecoService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhum preço cadastrado!');
    }
    return response.json(result);
  }
}
