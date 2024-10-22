import express from "express";
const app = express();
// console.log(app);
const PORT = 8000;

//make post data

app.use(express.json());


import userRouter from './src/router/userRouter.js'


app.use("/api/v1/users",userRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
