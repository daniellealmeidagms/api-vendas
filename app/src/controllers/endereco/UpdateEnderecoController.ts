import { Request, Response } from 'express';
import UpdateEnderecoService from '@services/endereco/UpdateEnderecoService';

export default class UpdateEnderecoController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;
    
    const {
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    } = request.body;
    
    const service = new UpdateEnderecoService();
    
    const result = await service.execute({
      id,
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    });
    
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    response.json(result);
  }
}
