const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Router = require("./routes/route");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw (error);
    }
}
mongoose.connection.on('disconnected', () => {
    console.log("mongoDb disconnected");
});
mongoose.connection.on('connected', () => {
    console.log("mongoDb connected");
});
const Router = require("./routes/route");
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.listen(PORT, () => {
    connect();
    console.log(`Server is running successfully on PORT http://localhost:${PORT}`)
});
