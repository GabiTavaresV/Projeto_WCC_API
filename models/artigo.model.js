module.exports = (sequelizeDatabase, Sequelize) => {
    
    const Artigo = sequelizeDatabase.define("artigos",{
        titilo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        publicado: {
            type: Sequelize.BOOLEAN
        }
    
        
    });

    return Artigo;
}