//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');

const toDo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {

    case 'create':
        let toDoTask = toDo.create(argv.description);
        console.log(toDoTask);
        break;

    case 'list':
        let toDoList = toDo.getList();
        for (let task of toDoList) {
            console.log('=========To Do========='.green);
            console.log(task.description);
            console.log('Status: ', task.completed);
            console.log('======================='.green);


        }
        break;

    case 'update':
        console.log('Updates a task');
        break;

    default:
        console.log('Command not valid');
}