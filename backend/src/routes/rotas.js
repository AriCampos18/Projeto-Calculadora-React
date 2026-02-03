const express = require ('express')
const rota = express.Router()
const controller = require ('../controller/CalculadoraController')
const middleware = require('../middlewares/ValidarCalculadora')

rota.get('/', controller.consultarHistorico)  // :param caso precise
rota.post('/salvar', middleware, controller.salvar)

module.exports = rota