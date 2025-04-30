import { Router } from 'express';
import criarPessoa from '../controllers/pessoas/criar.js';
import buscarPessoas from '../controllers/pessoas/buscar.js';
import buscarPessoasExcluidas from '../controllers/pessoas/lixeira.js';
import alterarPessoa from '../controllers/pessoas/alterar.js';
import excluirPessoa from '../controllers/pessoas/deletar.js';

const router = Router();

router.post("/pessoa", criarPessoa);

router.get('/pessoas', buscarPessoas);

router.get('/pessoasex', buscarPessoasExcluidas);

router.put('/pessoa/:id', alterarPessoa);

router.delete('/pessoa/:id', excluirPessoa);

export default router;