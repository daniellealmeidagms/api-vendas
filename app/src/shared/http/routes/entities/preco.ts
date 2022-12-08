import CreatePrecoController from '@controllers/preco/CreatePrecoController';
import DeletePrecoController from '@controllers/preco/DeletePrecoController';
import ReadAllPrecoController from '@controllers/preco/ReadAllPrecoController';
import ReadOnePrecoController from '@controllers/preco/ReadOnePrecoController';
import UpdatePrecoController from '@controllers/preco/UpdatePrecoController';
import { Router } from 'express';

const precoRoutes = Router();

precoRoutes.post('/', new CreatePrecoController().handle);
precoRoutes.get('/', new ReadAllPrecoController().handle);
precoRoutes.get('/:id', new ReadOnePrecoController().handle);
precoRoutes.put('/:id', new UpdatePrecoController().handle);
precoRoutes.patch('/:id', new DeletePrecoController().handle);

export default precoRoutes;
