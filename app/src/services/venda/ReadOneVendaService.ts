import { AppDataSource } from '@database/datasource';
import Venda from '@database/models/Venda';

type VendaRequest = { id: string };

export default class ReadOneVendaService {
  async execute({ id }: VendaRequest) {
    const repo = AppDataSource.getRepository(Venda);
    const venda = await repo.findOne({ where: { id } });
    if (!venda) {
      return new Error('Venda não encontrada!');
    }
    return venda;
  }
}
