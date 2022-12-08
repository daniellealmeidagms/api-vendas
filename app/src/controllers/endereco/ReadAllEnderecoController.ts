import { Response } from 'express';
import ReadAllEnderecoService from '@services/endereco/ReadAllEnderecoService';

export default class ReadAllEnderecoController {
  async handle(response: Response) {
    const service = new ReadAllEnderecoService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhum endereço cadastrado!');
    }
    return response.json(result);
  }
}
