const express = require('express')
const app = express()

app.get('/', function(request, response){
    response.send('olá mundo')

})

//ENDPOINT

app.get("/produtos", function(request, response){
    let produto = {
        id: 1,
        nome: "Tapioca",
        descricao: "Tapioca muito boa"

    }

    response.send (produto)

})

app.listen(8000, function(){
    console.log("SERVIDOR EXECUTANDO")

})