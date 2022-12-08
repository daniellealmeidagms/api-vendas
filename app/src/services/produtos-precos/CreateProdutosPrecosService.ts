import { AppDataSource } from "@database/datasource";
import ProdutoPreco from "@database/models/ProdutoPreco";

type ProdutoPrecoRequest = {
  idProduto: string,
  idPreco: string,
}

export class CreateProdutoPrecoService {

  async execute({ idProduto, idPreco }: ProdutoPrecoRequest ) :
  Promise<ProdutoPreco | Error> 
  {
    const repo = AppDataSource.getRepository(ProdutoPreco);

    if (await repo.findOne({ where : {idProduto, idPreco} })) {
      return new Error("Item já cadastrado");
    }

    const item = repo.create({
      idProduto,
      idPreco,
    })

    await repo.save(item);

    return item;
  }
}