import { AppDataSource } from '@database/datasource';
import Venda from '@database/models/Venda';

type CreateVendaRequest = {
  fkCliente: string,
  fkLojista: string,
  formaPagamento: string;
  vendaVarejo: boolean;
  desconto: number;
  valorFrete: number;
  valorTotal: number;
};

export default class CreateVendaService {
  async execute({
    fkCliente,
    fkLojista,
    formaPagamento,
    vendaVarejo,
    desconto,
    valorFrete,
    valorTotal,
  }: CreateVendaRequest): Promise<Venda | Error> {
    
    const repo = AppDataSource.getRepository(Venda);

    const now = new Date().toISOString();

    if (await repo.findOne({ where : { fkCliente, fkLojista, valorTotal, dataHoraVenda:now } })) {
      return new Error ( "Venda já cadastrada!");
    }

    const venda = repo.create({
      fkCliente,
      fkLojista,
      formaPagamento,
      vendaVarejo,
      desconto,
      valorFrete,
      valorTotal,
    });

    await repo.save(venda);

    return venda;
  }
}
