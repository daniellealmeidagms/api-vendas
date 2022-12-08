import { AppDataSource } from '@database/datasource';
import Lojista from '@database/models/Lojista';

export default class ReadAllLojistaService {
  async execute() {
    const repo = AppDataSource.getRepository(Lojista);
    const lojistas = await repo.find({where: {ativo: true}});
    return lojistas;
  }
}
