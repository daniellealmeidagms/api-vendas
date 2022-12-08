import { Response } from 'express';
import ReadAllClienteService from '@services/cliente/ReadAllClienteService';

export default class ReadAllClienteController {
  async handle(response: Response) {
    const service = new ReadAllClienteService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhum endereço cadastrado!');
    }
    return response.json(result);
  }
}
