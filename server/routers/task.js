var express = require('express');
var taskRouter = express.Router();
var TaskModel = require('../models/task');

// GET TASKS
taskRouter.get('/api/tasks', (req, res, next) => {
    TaskModel.find({})
        .then((tasks) => {
            return res.status(200).json(tasks);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })
});

// POST TASKS
taskRouter.post('/api/tasks', (req, res, next) => {
    if (!req.body) {
        return res.status(400);
    }
    TaskModel.create(req.body)
        .then((createTask) => {
            return res.status(200).json(createTask);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })
});

// UPDATE TASKS
taskRouter.put('/api/tasks', (req, res, next) => {
    if (!req.body) {
        return res.status(400);
    }
    TaskModel.findByIdAndUpdate(req.body._id, {
        $set: req.body
    }, { new: true }, (err, callback) => {
        if (err) {
            return res.status(500).json(err);
        }
        return res.status(200).json(callback);
    });
});

// DELETE TASKS
taskRouter.delete('/api/tasks/:taskId', (req, res, next) => {
    TaskModel.findOneAndRemove(req.params.taskId)
        .then((result) => {
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.status(500).json(err);
        })
});

module.exports = taskRouter;
