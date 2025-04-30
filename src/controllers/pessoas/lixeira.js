import Pessoa from '../../models/Pessoa.js';

async function buscarPessoasExcluidas(req, res) {
    try {
        const pessoas = await Pessoa.findAll({ where: {
            deletado: true
        } });
        
        res.status(200).json(pessoas);
    } catch (error) {
        res.status(500).json({ message: "Erro interno no servidor", erro: error });
    }
}

export default buscarPessoasExcluidas;
