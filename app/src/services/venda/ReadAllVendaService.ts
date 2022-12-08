import { AppDataSource } from '@database/datasource';
import Venda from '@database/models/Venda';

export default class ReadAllVendaService {
  async execute() {
    const repo = AppDataSource.getRepository(Venda);
    const vendas = await repo.find({where: {ativo: true}});
    return vendas;
  }
}
