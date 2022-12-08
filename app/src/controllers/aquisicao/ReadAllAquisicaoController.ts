import { Response } from 'express';
import ReadAllAquisicaoService from '@services/aquisicao/ReadAllAquisicaoService';

export default class ReadAllAquisicaoController {
  async handle(response: Response) {
    const service = new ReadAllAquisicaoService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhuma aquisição cadastrada!');
    }
    return response.json(result);
  }
}
