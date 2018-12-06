//In this file we are going to define and configure the commands

const description = {
    demand: true, //this means it is required
    alias: 'd', //a shorter version of the command
    desc: 'Task description'
}

const completed = {
    default: true,
    alias: 'c',
    desc: 'Updates the task to completed or not'
}

const argv = require('yargs')
    .command('create', 'Creates a task', {
        description
    })
    .command('update', 'Updates a task', {
        description,
        completed
    })
    .command('remove', 'Removes a task', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}