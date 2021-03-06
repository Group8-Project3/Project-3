// const Character = require("../models/character-model");
const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.characters.find(req.query)
        .then(dbcharacters => res.json(dbcharacters))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res){
        const character = req.body;
        db.characters.create(req.body)
        .then(dbcharacters => res.json(dbcharacters))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        })
    }
};