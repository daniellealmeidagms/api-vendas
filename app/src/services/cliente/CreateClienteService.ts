import { AppDataSource } from '@database/datasource';
import Cliente from '@database/models/Cliente';

type CreateClienteRequest = {
  cpf_cnpj: string;
  nome_razaosocial: string;
  tipoPessoa: string;
  telefone: number;
  fkEndereco: string;
};

export default class CreateClienteService {
  async execute({
    cpf_cnpj,
    nome_razaosocial,
    tipoPessoa,
    telefone,
    fkEndereco,
  }: CreateClienteRequest): Promise<Cliente | Error> {
    
    const repo = AppDataSource.getRepository(Cliente);

    if (await repo.findOne({ where: { cpf_cnpj } })) {
      return new Error('Cliente já cadastrado!');
    }

    const cliente = repo.create({
      cpf_cnpj,
      nome_razaosocial,
      tipoPessoa,
      telefone,
      fkEndereco
    });

    await repo.save(cliente);

    return cliente;
  }
}
