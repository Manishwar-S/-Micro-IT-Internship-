require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const router=require("./router/todoRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/todos",router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
