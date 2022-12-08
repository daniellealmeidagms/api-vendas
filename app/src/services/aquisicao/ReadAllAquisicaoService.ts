import { AppDataSource } from "@database/datasource";
import Aquisicao from "@database/models/Aquisicao";

export default class ReadAllAquisicaoService {
  async execute() {
    const repo = AppDataSource.getRepository(Aquisicao);
    const aquisicoes = await repo.find({where: {ativo: true}});
    return aquisicoes;
  }
}