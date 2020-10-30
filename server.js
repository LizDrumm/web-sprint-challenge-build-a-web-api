const express = require('express');
//const helmet = require('helmet');
const projectsRouter = require('./projects-router');
const actionsRouter = require('./actions-router');


const server = express();
//server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: "This is working." });
});


module.exports = server;
