import express from "express"
import usuariocontroller from "./controller/usuarios-controller.js";
import tarefascontroller from "./controller/tarefas-controller.js";
import cors from 'cors';

const app = express()

app.use(express.json())

app.use (cors())

app.get("/testedeploy",(req,res) => {
  res.status(200).send ({msg: "Api sendo acessada remotamente"});
});


usuariocontroller(app);
tarefascontroller(app);

export default app