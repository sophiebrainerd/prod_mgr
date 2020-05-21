const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const db = "productDB"

app.use(cors())
app.use(express.json());
require("./server/config/database.config")(db);
require('./server/routes/product.routes')(app);

app.listen(port, () => console.log(`Listening on ya port ${port}`) );
