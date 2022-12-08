import { AppDataSource } from '@database/datasource';
import Lojista from '@database/models/Lojista';

type UpdateLojistaRequest = {
  id: string;
  razaoSocial: string;
  segmento: string;
  telefone: number;
  fkEndereco: string;
};

export default class CreateLojistaService {
  async execute({
    id,
    razaoSocial,
    segmento,
    telefone,
    fkEndereco,
  }: UpdateLojistaRequest): Promise<Lojista | Error> {
    
    const repo = AppDataSource.getRepository(Lojista);

    const lojista = await repo.findOne({ where: { id } });
    
    if (!lojista) {
      return new Error('Lojista não encontrado!');
    }

    lojista.razaoSocial = razaoSocial ? razaoSocial : lojista.razaoSocial;
    lojista.segmento = segmento ? segmento : lojista.segmento;
    lojista.telefone = telefone ? telefone : lojista.telefone;
    lojista.fkEndereco = fkEndereco ? fkEndereco : lojista.fkEndereco;

    await repo.save(lojista);

    return lojista;
  }
}
