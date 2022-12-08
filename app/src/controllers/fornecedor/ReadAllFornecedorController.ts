import ReadAllFornecedorService from '@services/fornecedor/ReadAllFornecedorService';
import { Response } from 'express';

export default class ReadAllFornecedorController {
  async handle(response: Response) {
    const service = new ReadAllFornecedorService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhum fornecedor cadastrado!');
    }
    return response.json(result);
  }
}
