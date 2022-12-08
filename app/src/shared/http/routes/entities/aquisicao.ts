import CreateAquisicaoController from '@controllers/aquisicao/CreateAquisicaoController';
import ReadAllAquisicaoController from '@controllers/aquisicao/ReadAllAquisicaoController';
import ReadOneAquisicaoController from '@controllers/aquisicao/ReadOneAquisicaoController';
import DeleteAquisicaoController from '@controllers/aquisicao/DeleteAquisicaoController';
import { Router } from 'express';

const aquisicaoRoutes = Router();

aquisicaoRoutes.post('/', new CreateAquisicaoController().handle);
aquisicaoRoutes.get('/', new ReadAllAquisicaoController().handle);
aquisicaoRoutes.get('/:id', new ReadOneAquisicaoController().handle);
aquisicaoRoutes.patch('/:id', new DeleteAquisicaoController().handle);

export default aquisicaoRoutes;
