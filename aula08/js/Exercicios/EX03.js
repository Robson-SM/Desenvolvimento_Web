const express = require('express')
const app = express()

//ENDPOINT1

app.get("/contato", function(request, response){
    let contato = {
        id: 1,
        nome: "Robson"


    }

    response.send (contato)

})


//ENDPOINT2

app.get("/endereço", function(request, response){
    let endereço = {
        id: 1,
        cidade: "Itaquaquecetuba",
        bairro: "Jardim Zélia",
        estado: "São Paulo"


    }

    response.send (contato)

})


app.listen(8000, function(){
    console.log("SERVIDOR EXECUTANDO")

})