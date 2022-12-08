import { AppDataSource } from '@database/datasource'
import Endereco from '@database/models/Endereco'

type EnderecoRequest = { id: string };

export default class DeleteClienteService {
  async execute( { id } : EnderecoRequest ) {
    const repo = AppDataSource.getRepository(Endereco)
    const endereco = await repo.findOne({ where: { id } })
    if (!endereco) {
      return new Error('Endereço não encontrado!')
    }
    await repo.delete(endereco);
    return endereco;
  }
}
