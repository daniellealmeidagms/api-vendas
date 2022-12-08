import { AppDataSource } from "@database/datasource";
import Fornecedor from '@database/models/Fornecedor';

type CreateFornecedorRequest = {
  cnpj: string
  razaoSocial: string;
  telefone: number;
  fkEndereco: string;
}

export default class CreateFornecedorService {
  async execute({ 
    cnpj, 
    razaoSocial, 
    telefone, 
    fkEndereco }: CreateFornecedorRequest) : Promise < Fornecedor  | Error > {
    
    const repo = AppDataSource.getRepository(Fornecedor);

    if (await repo.findOne({ where : { cnpj } })) {
      return new Error ( "Fornecedor já cadastrado!");
    }

    const fornecedor = repo.create({
      cnpj,
      razaoSocial,
      telefone,
      fkEndereco
    });

    await repo.save(fornecedor);
    
    return fornecedor;
  }
}
