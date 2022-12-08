import { AppDataSource } from "@database/datasource";
import ProdutoAquisicao from "@database/models/ProdutoAquisicao";

type ProdutoAquisicaoRequest = {
  idProduto: string,
  idAquisicao: string,
}

export class CreateProdutoAquisicaoService {

  async execute({ idProduto, idAquisicao }: ProdutoAquisicaoRequest ):
  Promise<ProdutoAquisicao | Error> 
  {
    const repo = AppDataSource.getRepository(ProdutoAquisicao);

    if (await repo.findOne({ where : {idProduto, idAquisicao} })) {
      return new Error("Item já cadastrado");
    }

    const item = repo.create({
      idProduto,
      idAquisicao,
    })

    await repo.save(item);

    return item;
  }
}