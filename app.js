//requireds
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {

    case 'create':
        let toDoTask = toDo.create(argv.description);
        console.log(toDoTask);
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