import { Response } from 'express';
import ReadAllLojistaService from '@services/lojista/ReadAllLojistaService';

export default class ReadAllLojistaController {
  async handle(response: Response) {
    const service = new ReadAllLojistaService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhum lojista cadastrado!');
    }
    return response.json(result);
  }
}
