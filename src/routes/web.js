import express from "express";

// import controller
import indexController from "../controllers/indexController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", indexController.getIndex); 
    

    return app.use('/', router);
};

module.exports = initWebRoutes;