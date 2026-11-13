import express from "express";
export const driverRouter = express.Router();

driverRouter.get("/api/drivers", (req, res, next) =>{
    res.send(drivers);
});

driverRouter.get("/api/drivers/:id", (req, res, next) =>{
    const { id } = req.params;
    if (isNaN(+id)) {
        res.status(500).send("Not a number");
    }
    const singleDriver = drivers.find((driver) => {
        return driver.id === +id;
    });
    if(!singleDriver) {
        res.status(500).send("Driver not found");
    }
    res.send(singleDriver);
});

