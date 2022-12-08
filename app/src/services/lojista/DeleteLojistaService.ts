import { AppDataSource } from '@database/datasource'
import Lojista from '@database/models/Lojista'

type LojistaRequest = { id: string }

export default class DeleteLojistaService {
  async execute({ id }: LojistaRequest): Promise<Lojista | Error> {
    const repo = AppDataSource.getRepository(Lojista)
    const lojista = await repo.findOne({ where: { id } })
    if (!lojista) {
      return new Error('Lojista não encontrado.')
    }
    lojista.ativo = false
    await repo.save(lojista)
    return lojista
  }
}
