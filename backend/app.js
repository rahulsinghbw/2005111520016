const express = require("express");
require("dotenv").config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const trainRouter = require("./routes/trainRouter");
app.use("/api", trainRouter);


app.listen(3000, () => {
    console.log("Listening to port 3000");
})