const fs = require('fs');

let toDoList = [];

//loads the data.json from the db into the toDoList
const loadDB = () => {
    //checks if the data.json id empty
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
}

//saves in the data.json the toDoList
const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Error saving data', err);
    });
}

//creates a task and pushes it to the toDoList
let create = (description) => {
    loadDB();
    let toDoTask = {
        description,
        completed: false,
    };
    toDoList.push(toDoTask);
    saveDB();
    return toDoTask;
}

//returns the list of tasks
const getList = () => {
    loadDB();
    return toDoList;
}

module.exports = {
    create,
    getList
}