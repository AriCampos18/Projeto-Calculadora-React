const model = require ('../model/CalculadoraModelo')

class CalculadoraController{
    
    static async salvar(req, resp) {
        await model.save()
        .then(resposta=>{
            return resp.status(200)
            .json(resposta)
        })
        .catch(erro=>{
            return resp.status(500)
            .json(erro)
        })
    }

    static async consultarHistorico(req, resp) {
        await model.find()
        .then(resposta=>{
            return resp.status(200)
            .json(resposta)
        })
        .catch(erro=>{
            return resp.status(500)
            .json(erro)
        })
    }
}

module.exports = CalculadoraController