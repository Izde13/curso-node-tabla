const fs = require('fs');
let colors = require('colors');

const crearArchivo = async(base = 5, hasta = 10, listar = false) => {


    try {

        let salida = ''
        let consola = '';

        for (i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base *i}\n`;
            consola += `${base} ${'x'.magenta} ${i} ${'='.blue} ${base *i}\n`;
        }

        if (listar == true) {
            console.log('---------------'.bgGray);
            console.log(' Tabla del:'.green, colors.bold(base));
            console.log('---------------'.bgGray);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla ${base}`

    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}