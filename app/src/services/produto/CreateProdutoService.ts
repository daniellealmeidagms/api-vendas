import { AppDataSource } from "@database/datasource";
import Produto from "@database/models/Produto";

type CreateProdutoRequest = {
    descricao : string;
    tamanho: string;
    categoria : string;
    fkPreco : string;
    qtdEstoque : number;
}

export default class CreateProdutoService {
  async execute({
    descricao, 
    tamanho, 
    categoria, 
    fkPreco, 
    qtdEstoque
  } : CreateProdutoRequest) : Promise <Produto | Error> {
      
    const repo = AppDataSource.getRepository(Produto);

    if (await repo.findOne({ where : {descricao, tamanho} })) {
      return new Error("Produto já cadastrado!");
    }

    const produto = repo.create({
      descricao,
      tamanho,
      categoria,
      fkPreco,
      qtdEstoque
    });

    await repo.save(produto);
    
    return(produto);
  }
}