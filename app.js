//requireds
const argv = require('./config/yargs').argv;

let command = argv._[0];

switch (command) {

    case 'create':
        console.log('Creates a new task');
        break;

    case 'list':
        console.log('Shows all the tasks');
        break;

    case 'update':
        console.log('Updates a task');
        break;

    default:
        console.log('Command not valid');
}