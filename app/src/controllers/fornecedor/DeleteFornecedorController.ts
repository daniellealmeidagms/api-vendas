import DeleteFornecedorService from "@services/fornecedor/DeleteFornecedorService";
import { Request, Response } from 'express'

export default class DeleteFornecedorControler {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteFornecedorService();
    const result = await service.execute({id});
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(300).json('Fornecedor excluído com sucesso!');
    }
}