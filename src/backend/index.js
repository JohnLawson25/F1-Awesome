console.log("Hello From the inside")

import express from "express";
import { router } from "./api/index.js";
import morgan from "morgan";
import { drivers, teams } from "./data.js";
const app = express();

app.use(morgan("dev")); //Third party logging middleware

/*app.use( (req, res, next) =>{ //Our own loggin middleware
    console.log( `${req.method} - ${req.originalUrl}`);
    next();
}); */

//api express router getting rid of the /api prefix in the routes
app.use("/api", router);



const init = () => {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

init();