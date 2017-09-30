/**
 * @file app.js
 * @author: Albert Tang
 * I pledge my honor that I abided by the Stevens Honor System.
 */

const {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
} = require("./todo.js")

async function main() {
    try {
        let task1 = await createTask("Ponder Dinosaurs", 
        "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        console.log(task1);
        let task2 = await createTask("Play Pokemon with Twitch TV",
        "Should we revive Helix?");
        console.log(task2);
        console.log(await getAllTasks());
        await removeTask(task1._id);
        console.log(await getAllTasks());
        let finishedTask = await completeTask(task2._id);
        console.log(finishedTask);
    } catch (err) {
        throw err;
    }
}

main().catch((err) => console.error(err));