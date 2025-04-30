import Pessoa from '../../models/Pessoa.js';

async function createPessoa(req, res) {
    try {
        const { nome, idade, uf } = req.body;
    
        const newPessoa = await Pessoa.create({
            nome,
            idade,
            uf,
            deletado: false
        });
    
        res.status(201).json(newPessoa);
    } catch (error) {
       res.status(500).json({ message: "Erro interno no servidor", erro: error });
    }    
}

export default createPessoa;
