//In this file we are going to define and configure the commands

const argv = require('yargs')
    .command('create', 'Creates a task', {
        description: {
            demand: true, //this means it is required
            alias: 'd', //a shorter version of the command
            desc: 'Task description'
        }
    })
    .command('update', 'Updates a task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Task description'
        },
        done: {
            default: true,
            alias: 'c',
            desc: 'Updates the task to done or not'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}