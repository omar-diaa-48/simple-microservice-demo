const express = require("express")
const cors = require("cors")
const proxy = require("express-http-proxy")

const app = express();

app.use(cors())
app.use(express.json())

app.listen(5000, () => console.log("App is running on port 5000"))