import { Request, Response } from 'express';
import Endereco from '@database/models/Endereco';
import CreateEnderecoService from '@services/endereco/CreateEnderecoService';

export default class CreateEnderecoController {
  async handle(request: Request, response: Response) {
    
    const {
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    } = request.body;
    
    const service = new CreateEnderecoService();
    
    const result = await service.execute({
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

    response.status(200).json(result);
  }
}
