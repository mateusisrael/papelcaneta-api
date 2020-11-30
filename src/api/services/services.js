const models = require('../models/models');
const { model } = require('mongoose');


const getAllTasks = async() => {

    try{
        return await models.findAll();
    }catch(err) {
        return err;
    }
}


const addTask = async(task) => {
    try{
        await models.addTask(task)
    }catch(err) {
        return err;
    }
}


const delTask = async(taskId) => {
    try {
        return await models.removeTask(taskId)
    } catch (err) {
        return err
    }
}


module.exports = {
    getAllTasks,
    addTask,
    delTask
}