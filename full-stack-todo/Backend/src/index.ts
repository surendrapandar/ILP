// npm run dev - to start the server 

import express from 'express';
import todoroutes from "./routes/ToDoRoutes"
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors())

app.use("/todoroutes", todoroutes)

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with nodemon jadafd!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});