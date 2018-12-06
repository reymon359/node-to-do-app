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

//updates a task. By default updates completed to true
const update = (description, completed = true) => {
    loadDB();
    //index will be the index of the dbTask wich description matches the one from params
    let index = toDoList.findIndex(tarea => tarea.description === description);
    //if not found, findIndex returns -1
    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}
module.exports = {
    create,
    getList,
    update
}