import { Request, Response } from 'express';
import CreateVendaService from '@services/venda/CreateVendaService';

export default class CreateVendaController {
  async handle(request: Request, response: Response) {
    
    const {
      fkCliente,
      fkLojista,
      formaPagamento,
      vendaVarejo,
      desconto,
      valorFrete,
      valorTotal,
    } = request.body;
    
    const service = new CreateVendaService();
    
    const result = await service.execute({
      fkCliente,
      fkLojista,
      formaPagamento,
      vendaVarejo,
      desconto,
      valorFrete,
      valorTotal
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    
    response.status(200).json(result);
  }
}
