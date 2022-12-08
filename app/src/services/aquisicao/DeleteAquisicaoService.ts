import { AppDataSource } from "@database/datasource";
import Aquisicao from "@database/models/Aquisicao";

type AquisicaoRequest = { id: string };

export default class DeleteAquisicaoService {
  async execute({ id } : AquisicaoRequest) {
    const repo = AppDataSource.getRepository(Aquisicao);
    const aquisicao = await repo.findOne({ where: { id } });
    if (!aquisicao) {
      return new Error('Aquisição não encontrada!');
    }
    aquisicao.ativo = false;
    await repo.save(aquisicao);
    return aquisicao;
  }
}