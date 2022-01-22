require("dotenv").config();
// const db = require('./db/seed.js');
const express = require("express");
const cors = require("cors");
const app = express();

const photographerRoutes = require('./routes/photographer.routes');
const reviewRoutes = require('./routes/review.routes');
const photoRoutes = require('./routes/photos.routes');
const tagRoutes = require('./routes/tags.routes');
const msgRouters = require('./routes/messages.routes');

// app.use(express.static('client'));
// const {SERVER_PORT} = process.env;
// const authCtrl = require("./controllers");



app.use(cors());
app.use(express.json());

app.use('/photographers', photographerRoutes); "localhost:6500/photogphers"
app.use('/reviews', reviewRoutes);
app.use('/photos', photoRoutes);
app.use('/tags', tagRoutes );
app.use('/message', msgRouters);

app.get('/', (req, res) => {
    res.send('api is running')
});




const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, () => console.log(`server is running on ${port}`))