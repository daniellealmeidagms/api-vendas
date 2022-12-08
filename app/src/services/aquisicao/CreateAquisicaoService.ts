import { AppDataSource } from "@database/datasource";
import Aquisicao from "@database/models/Aquisicao";

type AquisicaoRequest = {
  formaPagamento: string;
  valorTotal: number;
  fkFornecedor: string;
  fkLojista: string;
};

export default class CreateAquisicaoService {
  async execute({ 
    formaPagamento, 
    valorTotal, 
    fkFornecedor, 
    fkLojista }: AquisicaoRequest): Promise<Aquisicao | Error> {
    
    const repo = AppDataSource.getRepository(Aquisicao);

    const now = new Date().toISOString();

    if (await repo.findOne({ where : {fkFornecedor, fkLojista, dataHoraAquisicao:now} })) {
      return new Error("Aquisição já existe");
    }

    const aquisicao = repo.create({
      formaPagamento,
      valorTotal,
      fkFornecedor,
      fkLojista,
    });

    await repo.save(aquisicao);
    
    return aquisicao;
  }
}