const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: 'false',
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Número hasta donde va la tabla'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'El hasta tiene que ser un número'
        }
        return true
    })
    .argv

module.exports = argv;