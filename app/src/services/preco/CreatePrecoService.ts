import { AppDataSource } from '@database/datasource';
import Preco from '@database/models/Preco';

type CreatePrecoRequest = {
  valor: number;
  dataInicioVigencia: Date;
  dataFimVigencia: Date;
  descricao: string;
};

export default class CreatePrecoService {
  async execute({
    valor,
    dataInicioVigencia,
    dataFimVigencia,
    descricao,
  }: CreatePrecoRequest): Promise<Preco | Error> {
    
    const repo = AppDataSource.getRepository(Preco);
    
    if (await repo.findOne({where: { valor, descricao, dataInicioVigencia }})) {
      return new Error('Preço já cadastrado.');
    }

    const preco = repo.create({
      valor,
      dataInicioVigencia,
      dataFimVigencia,
      descricao,
    });

    await repo.save(preco);
    
    return preco;
  }
}
