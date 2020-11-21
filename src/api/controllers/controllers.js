const service = require('../services/services');

const getData = async(req, res, next) => {
    const tasks = await service.getAllTasks()
    return res.send(tasks);
};

const addTask = async(req, res, next) => {
    const newMovie = {
        title: `${await req.body.title}`,
        description: `${await req.body.description}`
    }

    try {
        await service.addTask(newMovie)
        res.send({"message": "new task added"});
    } catch (error) {
        console.log(error);
        res.send({"message": "internal server error"})
    }
}

const delTask = async (req, res, next) => {
    const taskId = req.query.task_id

    try {
        await service.delTask(taskId)
        res.send({"message": "removed"})
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getData,
    addTask,
    delTask
}
