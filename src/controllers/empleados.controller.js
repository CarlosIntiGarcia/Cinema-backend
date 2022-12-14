//const qe = require('querystring');
const sq = require('sequelize');
const poo = require('../database');
const bs = require('bcryptjs');
const Persona = require('../models/persona');
const Empleado = require('../models/empleado');
//GET------------------------------------------------------------
async function getEmpleados(req,res){
    try {
        const empleados = await Empleado.empleado.findAll();
        res.json({
            data: empleados
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong in getEmpleados',
            data: error
        });
    }
};

async function getOneEmpleado(req,res){
    const { fk_persona } = req.params;
    try {
        const em = await Empleado.empleado.findOne({
            where: {
                fk_persona
            }
        });
        res.json({
            data: em
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong in getOneEmpleado',
            data: error
        });
    }
};
//----------------------------------------------------------------
//POST------------------------------------------------------------
function crear_empleado(req,res){
    const e = poo.transaction( async(t) =>{
        const {
            pk_numero_documento,
            v_primernombre,
            v_segundonombre,
            v_primerapellido,
            v_segundoapellido,
            i_telefono,
            v_direccion,
            v_pass,
            fk_tipo_documento,
            v_correo_electronico,
            v_foto,
            n_descuento,
            fk_numcontrato
            } = req.body;
            //Hash password
            const salt = await bs.genSalt(10);
            const hashPass = await bs.hash(v_pass,salt);
            return newEp = await Persona.persona.create({
                pk_numero_documento,
                v_primernombre,
                v_segundonombre,
                v_primerapellido,
                v_segundoapellido,
                i_telefono,
                v_direccion,
                v_pass : hashPass,
                fk_tipo_documento,
                v_correo_electronico,
                v_foto
            },{transaction: t}).then(async(newEp) => {
                return newEm = await Empleado.empleado.create({
                    fk_persona:newEp.pk_numero_documento,
                    n_descuento,
                    fk_numcontrato
                },{transaction: t})
            });
    }).then(result=>{
        return res.json({
            message:'Empleado created successfully',
            body: result,
            data: e
        });
    }).catch(err =>{
        console.log(err);
        res.status(500).json({
            message: 'Something goes wrong in crear_empleado',
            data: err
        });
    });
};
//---------------------------------------------------------------
//UPDATE---------------------------------------------------------
async function actualizar_empleado(req,res){
    const {
        fk_persona
    } = req.params;
    const {
        n_descuento,
        fk_numcontrato
    } = req.body;
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong in actualizar_empleado',
            data: error
        });
    }
}
//---------------------------------------------------------------
//GET
module.exports.getEmpleados = getEmpleados;
module.exports.getOneEmpleado = getOneEmpleado;
//POST
module.exports.crear_empleado = crear_empleado;
