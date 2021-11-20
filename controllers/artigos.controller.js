// regras de negócio do sistema de artigos
const { request, response } = require("express");
const database = require("../models");
const tabelaArtigos = database.artigos;

// Cria um novo artigo
exports.create = (request, response) => {
    const artigo = {
    titulo: request.body.titulo,
    descricao: request.body.descricao,
    publicado: request.body.publicado,
};
  // a promise pode ser resolvida
  // ou ela pode ser rejeitada (exemplo: ocorreu um erro ao tentar salvar)

    tabelaArtigos
    .create(artigo)
    .then(function () {
        response.send("Artigo criado com sucesso");
    })
    .catch(function (error) {
            response.status(500).send("Ocorreu um erro ao salvar o artigo");
    });
};

exports.findAll = (request, response) => {
    tabelaArtigos
    .findAll()
    .then(function (data) {
        response.send(data);
    })
    .catch(function () {
        response.status(500).send("Ocorreu um erro aos buscar todos os artigos.");
    });
};

        exports.findById =(request, response) => {
        tabelaArtigos.findByPk(request.query.id)
        .then(function (user){
            if (request.query.id == user.id){
            response.send(user);
    } else{
        response.status(404).send({
                    message:"Não foi possível encontrar um artigo com o id" + request.query.id
                });
            }
        }).catch(function(){
            response.status(500).send({
                message: "Erro obtendo o artigo id="+ request.params.id
        });
    });
};
        
 /*    exports.findOne = (request, response) => {
    tabelaArtigos.findOne({where: {titulo: request.query.titulo}})
    .then(function(user){
        if( request.query.titulo == user.titulo){
            response.send(user);
        }else{
            response.status(400).send({message: " Não foi possivel encontrar"
        });
        }
    }).catch(function () {
        response.status(500).send({
            message: "erro obtendo usuario"
        });
        
    });
}; */

exports.findByTitle = (request, response) => {
    const tituloArtigo = request.query.titulo;
    tabelaArtigos
    .findOne({ where: {titulo: tituloArtigo}})
    .then(function (data) {
        if(data) {
            response.send(data);
        } else {
            response
            .status(400)
            .send("Não foi possivel encontrar esse arquivo com esse titulo: ",tituloArtigo);
        }
    }).catch(function () {
        response
        .status(500)
        .send( "erro obtendo usuario",tituloArtigo);
        });
    };
