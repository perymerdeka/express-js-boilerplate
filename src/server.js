// require package
require("dotenv").config();


import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";

// init app
let app = express();


// config view engine
viewEngine(app);


// parsing using body parser and post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

// init all web routes
initWebRoutes(app);

// setting port
let port = process.env.PORT || 1337;

app.listen(
    port, () => {
        console.log(`App is Running at Port ${port}`);
    }
);
