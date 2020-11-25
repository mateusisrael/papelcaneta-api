const mongoose = require('mongoose');



// Schemas
const TaskScheema = mongoose.Schema({
    title: String,
    description: String,
})
const Task = mongoose.model('tasks', TaskScheema)



const findAll = async() => {
    const tasks = await Task.find((err, tasks) => {
        if(err) return err;
        return tasks;
    })

    return tasks.reverse();
}

const addTask = async (task) => {
    const newTask = Task({title: `${task.title}`, description: `${task.description}`})
    newTask.save((err) => {
        if(err) return err;
    });
}


const removeTask = async (taskId) => {
    await Task.deleteOne({ "_id": `${taskId}` }, (err) => {
        if (err) return err;
    })

}

module.exports = {
    findAll,
    addTask,
    removeTask
}
