const express = require('express')
const app = express()

//app.get('/', function(request, response){
  //  response.send('olá mundo')

//})



app.get("/produtos", function(request, response){
    let produto = {
        id: 1,
        nome: "TV LG",
        descricao: "LCD 60 polegadas",
        preço: 2000

    }

    response.send (produto)

})

app.listen(8000, function(){
    console.log("SERVIDOR EXECUTANDO")

})