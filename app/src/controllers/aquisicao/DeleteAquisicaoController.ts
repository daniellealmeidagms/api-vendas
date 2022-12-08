import { Request, Response } from "express";
import DeleteAquisicaoService from "@services/aquisicao/DeleteAquisicaoService";

export default class DeleteAquisicaoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteAquisicaoService();
    const result = await service.execute({id});
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(300).json('aquisição excluída com sucesso!');
  }
}