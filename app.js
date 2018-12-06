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
        let updated = toDo.update(argv.description, argv.c);
        if (updated) {
            console.log(`The status of the task`, colors.green(argv.description), `, has been updated to `, colors.green(argv.c));
        } else {
            console.log(`The task ${argv.description} couldnt be updated. It may don´t exist`.bgRed);
        }
        break;

    case 'remove':
        let removed = toDo.remove(argv.description);
        if (removed) {
            console.log(`The task`, colors.green(argv.description), `, was successfully removed`);
        } else {
            console.log(`The task ${argv.description} couldnt be removed. Maybe does not exist`.bgRed);
        }
        break;
    default:
        console.log('Command not valid');
}