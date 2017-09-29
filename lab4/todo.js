const uuidv4 = require('uuid/v4');
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;

async function createTask(title, description) {
    try {
        if(typeof(title) !== 'string') {
            throw typeError(`${title} is not a valid title!`);
        } if(typeof(description) !== 'string') {
            throw typeError(`${description} is not a valid description!`);
        }
        let task = {
            _id: uuidv4(),
            title: title,
            description: description,
            completed: false,
            completedAt: null
        }
        await todoItems.insertOne(task);
        return task;
    } catch (err) {
        throw err;
    }
}

async function getAllTasks() {
    try {
        return await todoItems.find().limit(todoItems.length);
    } catch (err) {
        throw err;
    }
}

async function getTask(id) {
    try {
        if(typeof(id) !== 'string') {
            throw typeError(`${id} is not a valid id!`);
        }
        return await todoItems.findOne({_id : id});
    } catch (err) {
        throw err;
    }
}

async function completeTask(taskId) {
    try {
        if(typeof(id) !== 'string') {
            throw typeError(`${id} is not a valid id!`);
        }
        return await todoItems.updateOne({_id : id}, {
            _id: id,
            title: title,
            description: description,
            completed: true,
            completedAt: Date.now()
        })
    } catch (err) {
        throw err;
    }
}

async function removeTask(id) {
    try {
        if(typeof(id) !== 'string') {
            throw typeError(`${id} is not a valid id`);
        }
        return await todoItems.deleteOne(id);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}