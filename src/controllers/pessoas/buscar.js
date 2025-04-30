import Pessoa from '../../models/Pessoa.js';

async function buscarPessoas(req, res) {
    try { 
        const pessoas = await Pessoa.findAll({ where: {
            deletado: false
        } });
        
        res.status(200).json(pessoas);
    } catch (error) {
        res.status(500).json({ message: "Erro interno no servidor", erro: error });
     }
}

export default buscarPessoas;
