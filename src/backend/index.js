console.log("Hello From the inside")

import express from "express";
import morgan from "morgan";
import { drivers, teams } from "./data.js";
const app = express();

app.use(morgan("dev")); //Third party logging middleware

/*app.use( (req, res, next) =>{
    console.log( `${req.method} - ${req.originalUrl}`);
    next();
}); */

app.get("/", (req, res, next) =>{
    res.send("I am the backend of the F1 Awesome App");
});

app.get("/api/drivers", (req, res, next) =>{
    res.send(drivers);
});

app.get("/api/drivers/:id", (req, res, next) =>{
    const { id } = req.params;
    const singleDriver = drivers.find((driver) => {
        return driver.id === +id;
    });
    res.send(singleDriver);
});

app.get("/api/teams", (req, res, next) =>{
    res.send(teams);
});

const init = () => {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

init();