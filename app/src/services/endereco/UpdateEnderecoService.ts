import { AppDataSource } from '@database/datasource';
import Endereco from '@database/models/Endereco';

type UpdateEnderecoRequest = {
  id: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export default class CreateLojistaService {
  async execute({
    id,
    cep, 
    logradouro, 
    complemento, 
    bairro, 
    localidade, 
    uf,
  }: UpdateEnderecoRequest): Promise<Endereco | Error> {
    
    const repo = AppDataSource.getRepository(Endereco);

    const endereco = await repo.findOne({ where: { id } });
    
    if (!endereco) {
      return new Error('Endereço não encontrado!');
    }

    endereco.cep = cep ? cep : endereco.cep;
    endereco.logradouro = logradouro ? logradouro : endereco.logradouro;
    endereco.complemento = complemento ? complemento : endereco.complemento;
    endereco.bairro = bairro ? bairro : endereco.bairro;
    endereco.localidade = localidade ? localidade : endereco.localidade;
    endereco.uf = uf ? uf : endereco.uf;

    await repo.save(endereco);

    return endereco;
  }
}
