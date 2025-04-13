const express = require('express');

const todoRouter = require('./routes/todo');

const app = express();
const PORT = 3000;
app.use(express.json());

app.use('/todo', todoRouter);
app.listen(PORT, () => {
  console.log(`Server is running in port`, PORT);
});