import { AppDataSource } from '@database/datasource'
import Fornecedor from '@database/models/Fornecedor'

type FornecedorRequest = { id: string }

export default class DeleteFornecedorService {
  async execute({ id }: FornecedorRequest) {
    const repo = AppDataSource.getRepository(Fornecedor)
    const fornecedor = await repo.findOne({ where : { id }})
    if(!fornecedor) {
      return new Error('Fornecedor não encontrado!')
    }
    fornecedor.ativo = false
    await repo.save(fornecedor)
    return fornecedor
  }
}
