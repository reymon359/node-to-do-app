const fs = require('fs');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Error saving data', err);
    });
}

let create = (description) => {
    let toDoTask = {
        description,
        completed: false,
    };

    toDoList.push(toDoTask);
    saveDB();
    return toDoTask;

}

module.exports = {
    create
}