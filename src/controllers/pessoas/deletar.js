import Pessoa from '../../models/Pessoa.js';

async function excluirPessoa(req, res) {
    try {
        const { id }     = req.params;

        const pessoa = await Pessoa.findAll({ where: {
            id: id
        } });

        if(pessoa.length == 0) res.status(400).json({ message: 'Pessoa não encontrada, verifique o id' });
        
        const novosDadosPessoa = await Pessoa.update({ deletado: true }, { where: {
            id: id
        }});

        res.status(200).end();
    } catch (error) {
        res.status(500).json({ message: "Erro interno no servidor", erro: error });
     }
}

export default excluirPessoa;