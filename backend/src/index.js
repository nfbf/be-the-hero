const express = require('express');
const routes = require('./routes');

const app = express ();

app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleta uma informação no bakc-end 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * 
 * SQL: MySQL, SQLLite, PostgreSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT  * FROM users
  * Query Builder: table('users').select('*').where()
  * 
  */




app.listen(3333);
