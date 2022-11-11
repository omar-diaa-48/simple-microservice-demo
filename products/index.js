const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json())

app.listen(5002, () => console.log("Products service is running on port 5002"))