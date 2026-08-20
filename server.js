import express from 'express';
import cors from 'cors';

import listarLivros from './rotas/listarLivros.js';
import buscarLivroPorId from './rotas/buscarLivroPorId.js';
import cadastrarLivro from './rotas/cadastrarLivro.js';
import atualizarLivro from './rotas/atualizarLivro.js';
import removerLivro from './rotas/removerLivro.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/livros', listarLivros);
app.get('/livros/:id', buscarLivroPorId);
app.post('/livros', cadastrarLivro);
app.put('/livros/:id', atualizarLivro);
app.delete('/livros/:id', removerLivro);

app.listen(3000, () => {
  console.log('API (CRUD) ativa na porta 3000.');
});