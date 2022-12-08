import CreateClienteController from '@controllers/cliente/CreateClienteController';
import DeleteClienteController from '@controllers/cliente/DeleteClienteController';
import ReadAllClienteController from '@controllers/cliente/ReadAllClienteController';
import ReadOneClienteController from '@controllers/cliente/ReadOneClienteController';
import UpdateClienteController from '@controllers/cliente/UpdateClienteController';
import { Router } from 'express';

const clienteRoutes = Router();

clienteRoutes.post('/', new CreateClienteController().handle);
clienteRoutes.get('/', new ReadAllClienteController().handle);
clienteRoutes.get('/:id', new ReadOneClienteController().handle);
clienteRoutes.put('/:id', new UpdateClienteController().handle);
clienteRoutes.patch('/:id', new DeleteClienteController().handle);

export default clienteRoutes;