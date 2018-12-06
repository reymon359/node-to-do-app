//requireds
const argv = require('yargs').argv;

console.log(argv);

let command = argv._[0];

switch (command) {

    case 'create':
        console.log('Creates a task to do');
        break;

    case 'list':
        console.log('Shows all the tasks to do');
        break;

    case 'update':
        console.log('Updates a task to do');
        break;

    default:
        console.log('Command not valid');
}