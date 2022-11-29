const argv = require('yargs').option('b',{
    alias: 'base',
    type:  'number',
    demandOption: true,
    describe: 'Base de la tabla'

    })
    .check((argv,option)=>{
        if (  isNaN(argv.base)  ) {
            throw 'La base tiene que ser un numero'
        } 
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'opcion para listar la tabla a guardar'
    })
    .option('u',{
        alias: 'until',
        type: 'number',
        demandOption: true,
        describe: 'hasta donde '
    })
    .argv;
    
module.exports = argv;