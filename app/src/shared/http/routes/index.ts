import { Router } from 'express';
import enderecoRoutes from './entities/endereco';
import fornecedorRoutes from './entities/fornecedor';
import lojistaRoutes from './entities/lojista';
import precoRoutes from './entities/preco';
import produtoRoutes from './entities/produto';
import vendaRoutes from './entities/venda';

const routes = Router();

routes.use('/enderecos', enderecoRoutes)
routes.use('/fornecedores', fornecedorRoutes);
routes.use('/lojistas', lojistaRoutes);
routes.use('/precos', precoRoutes);
routes.use('/produtos', produtoRoutes);
routes.use('/vendas', vendaRoutes)

routes.get('/', (req, res) => {
  return res.json({ message: 'Home Page' });
});

export default routes;
