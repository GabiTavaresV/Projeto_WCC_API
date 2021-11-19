// rotas do sistema de artigos

module.exports = (app) => {
    const artigosController = require("../controllers/artigos.controller.js");
    let router = require("express").Router();
  
     
    router.post("/", artigosController.create);
  
    router.get("/", artigosController.findAll);
    
    app.use("/artigos", router);
  };
  