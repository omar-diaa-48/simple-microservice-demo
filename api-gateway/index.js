const express = require("express")
const cors = require("cors")
const proxy = require("express-http-proxy")

const app = express();

app.use(cors())
app.use(express.json())

app.use('/customers', proxy('http://localhost:5001'))
app.use('/products', proxy('http://localhost:5002'))

app.get('/', (req, res) => {
    res.send('App is responding')
})

app.listen(5000, () => console.log("App is running on port 5000"))