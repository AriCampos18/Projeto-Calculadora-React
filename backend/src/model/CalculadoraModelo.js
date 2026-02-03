const mongoose = require('../config/bd')
const Schema = mongoose.Schema

const CalculadoraSchema = new Schema({
    operacao:{type:String, require:true},
    resultado:{type:Number, require:true}
})

module.exports = mongoose.model('CalculadoraModel', CalculadoraSchema)