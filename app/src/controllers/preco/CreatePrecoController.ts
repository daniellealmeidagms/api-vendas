import { Request, Response } from 'express';
import CreatePrecoService from '@services/preco/CreatePrecoService';

export default class CreatePrecoController {
  async handle(request: Request, response: Response) {
    
    const { valor, dataInicioVigencia, dataFimVigencia, descricao } = request.body;
    
    const service = new CreatePrecoService();
    const result = await service.execute({
      valor,
      dataInicioVigencia,
      dataFimVigencia,
      descricao,
    });
    
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    
    return response.json(result);
  }
}
