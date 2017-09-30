const uuidv4 = require('uuid/v4');
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;

/**
 * @param {string} title the title of the task.
 * @param {string} description the description of the task. 
 * @throws {TypeError} if the title is not a string.
 * @throws {TypeError} if the description is not a string.
 * @return {promise} of the created task. Reject if the task failed to
 *                   be made.
 */
async function createTask(title, description) {
    try {
        if(typeof(title) !== 'string') {
            throw TypeError(`${title} is not a valid title!`);
        } if(typeof(description) !== 'string') {
            throw TypeError(`${description} is not a valid description!`);
        }
        let task = {
            _id: uuidv4(),
            title: title,
            description: description,
            completed: false,
            completedAt: null
        }
        let items = await todoItems();
        await items.insertOne(task);
        return task;
    } catch (err) {
        throw err;
    }
}

/** 
 * @return {promise} of an array of all the tasks in the collection. Reject if
 *                   the tasks are failed to be retrieved. 
 */
async function getAllTasks() {
    try {
        let items = await todoItems();
        return await items.find().limit(todoItems.length).toArray();
    } catch (err) {
        throw err;
    }
}

/**
 * @param {string} id the id of the task.
 * @throws {TypeError} if the id is not a string.
 * @return {promise} of the task. Reject if the item is not found. 
 */
async function getTask(id) {
    try {
        if(typeof(id) !== 'string') {
            throw TypeError(`${id} is not a valid id!`);
        }
        let items = await todoItems();
        return await items.findOne({_id : id});
    } catch (err) {
        throw err;
    }
}


/**
 * @param {string} taskId the id of the task.
 * @throws {TypeError} if the taskId is not a string.
 * @return {promise} of the updated task. Reject if the item is not found. 
 */
async function completeTask(taskId) {
    try {
        if(typeof(taskId) !== 'string') {
            throw TypeError(`${taskId} is not a valid id!`);
        }
        let items = await todoItems(), tempItem = await getTask(taskId);
        await items.updateOne({_id : taskId}, {
            _id: taskId,
            title: tempItem.title,
            description: tempItem.description,
            completed: true,
            completedAt: new Date()
        });
        return await getTask(taskId);
    } catch (err) {
        throw err;
    }
}


/**
 * @param {string} id the id of the task.
 * @throws {TypeError} if the id is not a string.
 * @return {promise} true if the item was successfully removed. Reject if the
 *                   was not found.
 */
async function removeTask(id) {
    try {
        if(typeof(id) !== 'string') {
            throw TypeError(`${id} is not a valid id`);
        }
        let items = await todoItems();
        await items.deleteOne({_id : id});
        return true
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