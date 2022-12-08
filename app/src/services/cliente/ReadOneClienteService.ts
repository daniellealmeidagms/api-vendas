import { AppDataSource } from '@database/datasource';
import Cliente from '@database/models/Cliente';

type ClienteRequest = { id: string };

export default class ReadOneClienteService {
  async execute({ id }: ClienteRequest) {
    const repo = AppDataSource.getRepository(Cliente);
    const cliente = await repo.findOne({ where: { id } });
    if (!cliente) {
      return new Error('Cliente não encontrado!');
    }
    return cliente;
  }
}
