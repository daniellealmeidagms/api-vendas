import { AppDataSource } from '@database/datasource';
import Venda from '@database/models/Venda';

type VendaRequest = { id: string };

export default class DeleteVendaService {
  async execute({ id }: VendaRequest) {
    const repo = AppDataSource.getRepository(Venda);
    const venda = await repo.findOne({ where: { id } });
    if (!venda) {
      return new Error('Venda não encontrada!');
    }
    venda.ativo = false;
    await repo.save(venda);
    return venda;
  }
}
