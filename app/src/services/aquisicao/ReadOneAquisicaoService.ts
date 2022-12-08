import { AppDataSource } from '@database/datasource';
import Aquisicao from '@database/models/Aquisicao';

type AquisicaoRequest = { id: string };

export default class ReadOneAquisicaoService {
  async execute({ id }: AquisicaoRequest) {
    const repo = AppDataSource.getRepository(Aquisicao);
    const aquisicao = await repo.findOne({ where: { id } });
    if (!aquisicao) {
      return new Error('Aquisição não encontrada!');
    }
    return aquisicao;
  }
}
