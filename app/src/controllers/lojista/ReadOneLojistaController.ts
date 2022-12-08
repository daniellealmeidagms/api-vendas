import ReadOneLojistaService from '@services/lojista/ReadOneLojistaService';
import {Request, Response } from 'express'

export default class ReadOneLojistaController{
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ReadOneLojistaService();
    const result = await service.execute({ id });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }

}