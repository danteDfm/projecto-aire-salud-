const router = require('express').Router();
const aireSaludRouter = require('./aire_salud.routes');

exports.routerAPI = (app) => {

    app.use('/api/v1', router);

    router.use('/index', aireSaludRouter);


}