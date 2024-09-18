const express = require("express");
const { ConnectToMongoDb } = require("./connection");
const UrlRoute = require("./routes/url");
const staticroutes = require("./routes/staticroutes");
const path = require("path");
// const jsonParser = require("./middleware/bodyParser");

const app = express();
const port = 8000;

// Connect To MongoDB
ConnectToMongoDb("mongodb://localhost:27017/Short-Url")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Failed to connect ", err);
    });

// Set View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Add Middleware 
// app.use(jsonParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Correct usage of express.urlencoded

// // Routes
app.use("/url", UrlRoute);
app.use("/", staticroutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
