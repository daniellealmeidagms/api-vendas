import { AppDataSource } from '@database/datasource';
import Lojista from '@database/models/Lojista';

type CreateLojistaRequest = {
  cnpj: string;
  razaoSocial: string;
  segmento: string;
  telefone: number;
  fkEndereco: string;
};

export default class CreateLojistaService {
  async execute({
    cnpj,
    razaoSocial,
    segmento,
    telefone,
    fkEndereco,
  }: CreateLojistaRequest): Promise<Lojista | Error> {
    
    const repo = AppDataSource.getRepository(Lojista);

    if (await repo.findOne({ where : {cnpj} })) {
      return new Error("Lojista já cadastrado!");
    }

    const lojista = repo.create({
      cnpj,
      razaoSocial,
      segmento,
      telefone,
      fkEndereco
    });
    
    await repo.save(lojista);

    return lojista;
  }
}
