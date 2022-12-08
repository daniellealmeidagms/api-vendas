  import { AppDataSource } from "@database/datasource";
  import Cliente from "@database/models/Cliente";

  type ClienteUpdateRequest = {
    id: string,
    nome_razaosocial: string;
    tipoPessoa: string;
    telefone: number;
    fkEndereco: string;
  }

  export default class UpdateClienteService {
    async execute({ 
      id,
      nome_razaosocial, 
      tipoPessoa, 
      telefone, 
      fkEndereco 
    }: ClienteUpdateRequest): Promise<Cliente | Error>{
      
      const repo = AppDataSource.getRepository(Cliente);

      const cliente = await repo.findOne({where: {id}});

      if (!cliente) {
        return new Error("Cliente não encontrado!");
      }

      cliente.nome_razaosocial = nome_razaosocial ? nome_razaosocial : cliente.nome_razaosocial;
      cliente.tipoPessoa = tipoPessoa ? tipoPessoa : cliente.tipoPessoa;
      cliente.telefone = telefone ? telefone : cliente.telefone;
      cliente.fkEndereco = fkEndereco ? fkEndereco : cliente.fkEndereco;

      await repo.save(cliente);

      return cliente;
    }
  }