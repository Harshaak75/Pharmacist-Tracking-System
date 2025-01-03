import express from "express";
import adminRouter from "./router/admin.routes";
import representativeRouter  from "./router/representative.routes";
import cors from "cors"

import LoginRouter from "./router/Login.routes"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.get("/", (req,res) =>{
    res.json({ message: "Welcome to the API!" });
})

app.use("/medtrackpro", LoginRouter)

app.use("/admin",adminRouter) // admin routes

app.use("/representative", representativeRouter)

export default app;