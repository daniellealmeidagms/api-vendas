import { AppDataSource } from "@database/datasource";
import Endereco from "@database/models/Endereco";

type CreateEnderecoRequest = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default class CreateEnderecoService {

  async execute({ 
    cep, 
    logradouro, 
    complemento, 
    bairro, 
    localidade, 
    uf }: CreateEnderecoRequest ): Promise<Endereco|Error> {

    const repo = AppDataSource.getRepository(Endereco);

    if (await repo.findOne({ where : { cep, logradouro, bairro, localidade, uf, complemento } })) {
      return new Error ( "Endereço já cadastrado!");
    }

    const endereco = repo.create({
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    })

    await repo.save(endereco);

    return endereco;
  }
}