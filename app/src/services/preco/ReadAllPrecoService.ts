import { AppDataSource } from '@database/datasource';
import Preco from '@database/models/Preco';

export default class ReadAllPrecoService {
  async execute() {
    const repo = AppDataSource.getRepository(Preco);
    const precos = await repo.find({where: {ativo: true}});
    return precos;
  }
}
