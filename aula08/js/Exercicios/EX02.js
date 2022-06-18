const express = require('express')
const app = express()




app.get("/animais", function(request, response){
    let animais = {
        id: 1,
        nome: "gato",
        especie: "felinos"
       

    }

    response.send (animais)

})

app.listen(8000, function(){
    console.log("SERVIDOR EXECUTANDO")

})