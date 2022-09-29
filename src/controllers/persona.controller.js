const sq = require('sequelize');
const poo = require('../database');

const Persona = require('../models/persona');

async function getPersonas(req,res){
    try {
        const personas = await Persona.persona.findAll();
        res.json({
            data: personas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong in getPersonas',
            data: error
        });
    }
};

async function getOnePersona(req,res){
    const { pk_numero_documento } = req.params;
    console.log(pk_numero_documento)
    try {
        const pr = await Persona.persona.findOne({
            where: {
                pk_numero_documento
            }
        });
        res.json({
            data: pr
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong in getOnePersona',
            data: error
        });
    }
};

//async function 
module.exports.getOnePersona = getOnePersona;
module.exports.getPersonas = getPersonas;
