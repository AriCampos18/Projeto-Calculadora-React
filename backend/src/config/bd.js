const mongoose = require ('mongoose')

const url = 'mongodb://localhost:27017/projetoCalculadora'

mongoose.connect(url) //{useNewUrlParser: true} essa parte que viria depois do 'url' ficou antigo e não é mais usado

module.exports = mongoose