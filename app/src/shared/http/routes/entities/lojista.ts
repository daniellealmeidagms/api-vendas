import CreateLojistaController from '@controllers/lojista/CreateLojistaController';
import ReadAllLojistaController from '@controllers/lojista/ReadAllLojistaController';
import ReadOneLojistaController from '@controllers/lojista/ReadOneLojistaController';
import UpdateLojistaController from '@controllers/lojista/UpdateLojistaController';
import DeleteLojistaController from '@controllers/lojista/DeleteLojistaController';
import { Router } from 'express';

const lojistaRoutes = Router();

lojistaRoutes.post('/', new CreateLojistaController().handle);
lojistaRoutes.get('/', new ReadAllLojistaController().handle);
lojistaRoutes.get('/:id', new ReadOneLojistaController().handle);
lojistaRoutes.put('/:id', new UpdateLojistaController().handle);
lojistaRoutes.patch('/:id', new DeleteLojistaController().handle);

export default lojistaRoutes;