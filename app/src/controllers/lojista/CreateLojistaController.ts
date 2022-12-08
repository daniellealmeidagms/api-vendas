import CreateLojistaService from "@services/lojista/CreateLojistaService";
import { Request, Response } from "express"

export default class CreateLojistaController {
  async handle(request : Request, response : Response) {
    
    const {cnpj, razaoSocial, segmento, telefone, fkEndereco } = request.body 
    
    const service = new CreateLojistaService();

    const result = await service.execute({cnpj, razaoSocial, segmento, telefone, fkEndereco});

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    
    return response.json(result);
  }
}