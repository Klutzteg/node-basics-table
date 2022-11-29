const { createTable } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

    createTable(argv.b , argv.l, argv.u)
    .then( fileName => console.log(fileName,'creado'))
    .catch( err => console.log(err) );