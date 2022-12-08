import CreateProdutoController from '@controllers/produto/CreateProdutoController';
import ReadAllProdutoController from '@controllers/produto/ReadAllProdutoController';
import ReadOneProdutoController from '@controllers/produto/ReadOneProdutoController';
import UpdateProdutoController from '@controllers/produto/UpdateProdutoController';
import DeleteProdutoController from '@controllers/produto/DeleteProdutoController';
import { Router } from 'express';

const produtoRoutes = Router();

produtoRoutes.post('/', new CreateProdutoController().handle);
produtoRoutes.get('/', new ReadAllProdutoController().handle);
produtoRoutes.get('/:id', new ReadOneProdutoController().handle);
produtoRoutes.put('/:id', new UpdateProdutoController().handle);
produtoRoutes.patch('/:id', new DeleteProdutoController().handle);

export default produtoRoutes;
