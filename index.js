const express = require("express");
const app = express();
const port = 8080;

app.get("/", function(req, res){
    res.send("Minha primeira requisição!")
});

app.get("/segunda-req", function(req, res){
    res.send("minha SEGUNDA requisição!")
});


app.get("/com-parametros", function(req, res){
    res.send("Com parametros funciona!, Sabadou "  +  req.query.nome)
});

app.post("/meu-orimeiro-post", function(req, res){
    console.log(req.body);
    res.send("meu post funciona");
});

app.put("/meu-primeiro-put/:id", function(req, res){
    console.log(req.body, req.params.id);
    res.send("meu put funciona");
});

app.delete("/meu-primeiro-delete/:id", function(req, res){
    console.log(re.params.id)
    res.send("Meu delete funciona" + req.params.id)
})



app.listen(port, function(){
    console.log("Ouvindo a porta:", port);
});