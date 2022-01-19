require("dotenv").config();
const db = require('./db/models.js');
const express = require("express");
const cors = require("cors");
const app = express();

const photographerRoutes = require('./routes/photographer.routes');

// app.use(express.static('client'));
// const {SERVER_PORT} = process.env;
// const authCtrl = require("./controllers");



app.use(cors());
app.use(express.json());

app.use('/photographers', photographerRoutes);

app.get('/', (req, res) => {
    res.send('api is running')
});




const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, () => console.log(`server is running on ${port}`))