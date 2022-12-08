import CreateFornecedorService from "@services/fornecedor/CreateFornecedorService";
import { Request, Response } from "express";

export default class CreateFornecedorController{
  async handle(request: Request, response: Response) {
    
    const { cnpj, razaoSocial, telefone, fkEndereco} = request.body
    
    const service = new CreateFornecedorService();
    
    const result = await service.execute({ cnpj, razaoSocial, telefone, fkEndereco });
    
    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    
    return response.json(result);
  }
}