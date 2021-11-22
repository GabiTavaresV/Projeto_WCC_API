// rotas do sistema de artigos

module.exports = (app) => {
    const artigosController = require("../controllers/artigos.controller.js");
    let router = require("express").Router();
  
  
    router.post("/", artigosController.create);
  
    router.get("/", artigosController.findAll);

    router.get("/findByTitle", artigosController.findByTitle);

    router.get("/findById", artigosController.findById);

    router.get("/published", artigosController.findAllPublished);

    app.use("/artigos", router);
  };

