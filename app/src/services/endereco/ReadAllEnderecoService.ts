import Endereco from '@database/models/Endereco';
import { AppDataSource } from 'src/database/datasource';

export default class ReadAllClienteService {
  async execute() {
    const repo = AppDataSource.getRepository(Endereco);
    const enderecos = await repo.find({where: {ativo: true}});
    return enderecos;
  }
}