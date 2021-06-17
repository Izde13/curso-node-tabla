const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
let colors = require('colors');


console.clear()

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.underline.red))
    .catch(err => console.log(err));