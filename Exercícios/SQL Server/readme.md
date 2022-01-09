# SQL Server

São altamente tipados, é necessário especificar sempre o tipo do dado na criação das colunas e na inserção de dados é necessário que o dado corresponda ao tipo da coluna.

## Porque armazenar dados?
Guardar informações para reaproveitar no futuro, ou para gerar estudos, para controle, etc.

## O que é um banco de dados?
São dados armazenados em conjunto.

## O que são SGBDs?
São os softwares que gerenciam os bancos de dados.

## Relacionais ou Não-Relacionais

| Relacional | Não-Relacional |
|------------|----------------|
| SQL Server | MongoDB        |
| Oracle     | Neo4j          |
| MySQL      | Firebase       |

### Relacionais
Para sistemas que necessitam de um grande confiabilidade dos dados.

Possuem tabelas que se relacionam entre si. Como por exemplo, uma tabela `Produtos` e uma tabela `Clientes` que se relacionam com a tabela `Vendas` de um comércio.

#### Atomicidade
Garante que todos os dados estão corretos antes da inserção no banco, como por exemplo se a tabela existe.

### Não relacionais
Voltados para cenários de melhor performance, armazenam grandes volumes de dados, melhor para vídeos, imagens, links, etc.

## Principais tipos de dados

- int
- bigint
- float
- date
- datetime
- time
- char
- varchar(tamanho)
- binary
- bit

## Comandos básicos

- Criar banco:

```sql
    CREATE DATABASE nomeDaDatabase
```

- Acessar banco:

```sql
    use nomeDaDatabase
```

- Criar tabela:

```sql
    CREATE TABLE teste
    (
        descricao varchar(50) NULL, /* aceita valores nulos */
        complemento char(50) NOT NULL /* não aceita valores nulos */
    )
```

- Apagar tabela:

```sql
    DROP TABLE teste
```





