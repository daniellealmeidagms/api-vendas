import CreateFornecedorController from '@controllers/fornecedor/CreateFornecedorController';
import DeleteFornecedorControler from '@controllers/fornecedor/DeleteFornecedorController';
import ReadAllFornecedorController from '@controllers/fornecedor/ReadAllFornecedorController';
import ReadOneFornecedorController from '@controllers/fornecedor/ReadOneFornecedorController';
import UpdateFornecedorController from '@controllers/fornecedor/UpdateFornecedorController';
import { Router } from 'express';

const fornecedorRoutes = Router();

fornecedorRoutes.post('/', new CreateFornecedorController().handle);
fornecedorRoutes.get('/', new ReadAllFornecedorController().handle);
fornecedorRoutes.get('/:id', new ReadOneFornecedorController().handle);
fornecedorRoutes.put('/:id', new UpdateFornecedorController().handle);
fornecedorRoutes.patch('/:id', new DeleteFornecedorControler().handle);

export default fornecedorRoutes;