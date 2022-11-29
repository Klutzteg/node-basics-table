const fs = require('fs');

const createTable = async(base,listar = false,until) =>{
    
    try {
    
        let out = '';

        for (let i = 1; i < until+1; i++) {
            const c = i;
               out += `${base} x ${c} = ${base * c}\n`;    
        }
        
        
        fs.writeFileSync(`./salida/tabla del ${base}.txt`,out);
        if (listar) {
            console.log(out);
        }
            return `Tabla del ${base}`;

            
    } catch (err) {
        throw err;
    }

}

module.exports = {
    createTable
}
