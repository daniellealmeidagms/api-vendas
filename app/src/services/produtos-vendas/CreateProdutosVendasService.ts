import { AppDataSource } from "@database/datasource";
import ProdutoVenda from "@database/models/ProdutoVenda";

type ProdutoVendaRequest = {
  idProduto: string,
  idVenda: string,
}

export class CreateProdutoVendaService {

  async execute({ idProduto, idVenda }: ProdutoVendaRequest ):
  Promise<ProdutoVenda | Error> 
  {
    const repo = AppDataSource.getRepository(ProdutoVenda);

    if (await repo.findOne({ where : {idProduto, idVenda} })) {
      return new Error("Item já cadastrado");
    }

    const item = repo.create({
      idProduto,
      idVenda,
    })

    await repo.save(item);

    return item;
  }
}