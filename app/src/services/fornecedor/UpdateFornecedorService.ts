import { AppDataSource } from '@database/datasource';
import Fornecedor from '@database/models/Fornecedor';

type UpdateFornecedorRequest = {
  id: string;
  razaoSocial: string;
  telefone: number;
  fkEndereco: string;
};

export default class UpdateFornecedorService {
  async execute({ id, razaoSocial, telefone, fkEndereco }: UpdateFornecedorRequest) {
    
    const repo = AppDataSource.getRepository(Fornecedor);

    const fornecedor = await repo.findOne({ where: { id } });
    
    if (!fornecedor) {
      return new Error('Fornecedor não encontrado!');
    }

    fornecedor.razaoSocial = razaoSocial ? razaoSocial : fornecedor.razaoSocial;
    fornecedor.telefone = telefone ? telefone : fornecedor.telefone;
    fornecedor.fkEndereco = fkEndereco ? fkEndereco : fornecedor.fkEndereco;

    await repo.save(fornecedor);

    return fornecedor;
  }
}
