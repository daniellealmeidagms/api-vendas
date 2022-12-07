CREATE TABLE "produtos" (
  "id" varchar PRIMARY KEY,
  "descricao" varchar NOT NULL,
  "tamanho" varchar(3) NOT NULL,
  "categoria" char(1) NOT NULL,
  "qtdEstoque" integer DEFAULT 0,
  "ativo" boolean DEFAULT true
);

CREATE TABLE "precos" (
  "id" varchar PRIMARY KEY,
  "valor" numeric(8,2) NOT NULL,
  "dataInicioVigencia" date NOT NULL,
  "dataFimVigencia" date NOT NULL,
  "descricao" varchar(50),
  "ativo" boolean DEFAULT true
);

CREATE TABLE "vendas" (
  "id" varchar PRIMARY KEY,
  "fkCliente" varchar NOT NULL,
  "fkLojista" varchar NOT NULL,
  "dataHoraVenda" timestamptz DEFAULT 'now()',
  "formaPagamento" char(2) NOT NULL,
  "vendaVarejo" boolean DEFAULT true,
  "desconto" numeric(3) DEFAULT 0,
  "valorFrete" numeric(5, 2) DEFAULT 0,
  "valorTotal" numeric(12,2) NOT NULL,
  "enviada" boolean DEFAULT false,
  "ativo" boolean DEFAULT true
);

CREATE TABLE "clientes" (
  "id" varchar PRIMARY KEY,
  "fkEndereco" varchar NOT NULL,
  "cpf_cnpj" varchar(14) UNIQUE NOT NULL,
  "nome_razaosocial" varchar(80) NOT NULL,
  "telefone" bigint NOT NULL,
  "tipoPessoa" char(2),
  "ativo" boolean DEFAULT true
);

CREATE TABLE "aquisicoes" (
  "id" varchar PRIMARY KEY,
  "fkFornecedor" varchar NOT NULL,
  "fkLojista" varchar NOT NULL,
  "dataHoraAquisicao" timestamptz DEFAULT 'now()',
  "formaPagamento" char(2) NOT NULL,
  "valorTotal" numeric(12,2) NOT NULL,
  "ativo" boolean DEFAULT true
);

CREATE TABLE "lojistas" (
  "id" varchar PRIMARY KEY,
  "fkEndereco" varchar NOT NULL,
  "cnpj" char(14) UNIQUE NOT NULL,
  "razaoSocial" varchar(80) NOT NULL,
  "segmento" varchar(50),
  "telefone" bigint NOT NULL,
  "ativo" boolean DEFAULT true
);

CREATE TABLE "fornecedores" (
  "id" varchar PRIMARY KEY,
  "fkEndereco" varchar NOT NULL,
  "cnpj" char(14) UNIQUE NOT NULL,
  "razaoSocial" varchar(80) NOT NULL,
  "telefone" bigint NOT NULL,
  "ativo" boolean DEFAULT true
);

CREATE TABLE "enderecos" (
  "id" varchar PRIMARY KEY,
  "cep" char(8) NOT NULL,
  "logradouro" varchar(50) NOT NULL,
  "complemento" varchar(100) NOT NULL,
  "bairro" varchar(50),
  "localidade" varchar(50) NOT NULL,
  "uf" char(2) NOT NULL
);

CREATE TABLE "produtos_vendas" (
  "idProduto" varchar,
  "idVenda" varchar,
  PRIMARY KEY ("idProduto", "idVenda")
);

ALTER TABLE "produtos_vendas" ADD FOREIGN KEY ("idProduto") REFERENCES "produtos" ("id");

ALTER TABLE "produtos_vendas" ADD FOREIGN KEY ("idVenda") REFERENCES "vendas" ("id");


CREATE TABLE "produtos_aquisicoes" (
  "idProduto" varchar,
  "idAquisicao" varchar,
  PRIMARY KEY ("idProduto", "idAquisicao")
);

ALTER TABLE "produtos_aquisicoes" ADD FOREIGN KEY ("idProduto") REFERENCES "produtos" ("id");

ALTER TABLE "produtos_aquisicoes" ADD FOREIGN KEY ("idAquisicao") REFERENCES "aquisicoes" ("id");


CREATE TABLE "produtos_precos" (
  "idProduto" varchar,
  "idPreco" varchar,
  PRIMARY KEY ("idProduto", "idPreco")
);

ALTER TABLE "produtos_precos" ADD FOREIGN KEY ("idProduto") REFERENCES "produtos" ("id");

ALTER TABLE "produtos_precos" ADD FOREIGN KEY ("idPreco") REFERENCES "precos" ("id");


ALTER TABLE "vendas" ADD FOREIGN KEY ("fkCliente") REFERENCES "clientes" ("id");

ALTER TABLE "vendas" ADD FOREIGN KEY ("fkLojista") REFERENCES "lojistas" ("id");

ALTER TABLE "aquisicoes" ADD FOREIGN KEY ("fkFornecedor") REFERENCES "fornecedores" ("id");

ALTER TABLE "aquisicoes" ADD FOREIGN KEY ("fkLojista") REFERENCES "lojistas" ("id");

ALTER TABLE "fornecedores" ADD FOREIGN KEY ("fkEndereco") REFERENCES "enderecos" ("id");

ALTER TABLE "lojistas" ADD FOREIGN KEY ("fkEndereco") REFERENCES "enderecos" ("id");

ALTER TABLE "clientes" ADD FOREIGN KEY ("fkEndereco") REFERENCES "enderecos" ("id");
