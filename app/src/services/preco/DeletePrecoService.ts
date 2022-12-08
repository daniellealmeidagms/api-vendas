import { AppDataSource } from '@database/datasource';
import Preco from '@database/models/Preco';

type PrecoRequest = { id: string };

export default class DeletePrecoService {
  async execute({ id }: PrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    const preco = await repo.findOne({ where: { id } });
    if (!preco) {
      return new Error('Preço não encontrado.');
    }
    preco.ativo = false;
    await repo.save(preco);
    return preco;
  }
}
