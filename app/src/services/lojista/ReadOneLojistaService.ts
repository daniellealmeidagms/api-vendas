import { AppDataSource } from '@database/datasource';
import Lojista from '@database/models/Lojista';

type LojistaRequest = { id: string };

export default class ReadOneLojistaService {
  async execute({ id }: LojistaRequest) {
    const repo = AppDataSource.getRepository(Lojista);
    const lojista = await repo.findOne({ where: { id } });
    if (!lojista) {
      return new Error('Lojista não encontrado!');
    }
    return lojista;
  }
}
