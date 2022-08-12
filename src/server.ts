import express from "express"
import { helloRouter } from "./routes";

export const app = express();

app.use(express.json());

app.use("/hello", helloRouter)

app.listen(3333, () => {
  console.log("Server active in port 3333!!")
})