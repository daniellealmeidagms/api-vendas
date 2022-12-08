import { Response } from 'express';
import ReadAllVendaService from '@services/venda/ReadAllVendaService';

export default class ReadAllProdutoController {
  async handle(response: Response) {
    const service = new ReadAllVendaService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhuma venda cadastrada!');
    }
    return response.json(result);
  }
}
