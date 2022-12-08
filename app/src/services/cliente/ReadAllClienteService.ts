import { AppDataSource } from 'src/database/datasource';
import Cliente from '@database/models/Cliente';

export default class ReadAllClienteService {
  async execute() {
    const repo = AppDataSource.getRepository(Cliente);
    const clientes = await repo.find({where: {ativo: true}});
    return clientes;
  }
}