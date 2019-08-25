const express = require('express');
const cors = require('cors');
const mountRoutes = require('./routes');
const port = 8080;
const app = express();
app.use(cors());
mountRoutes(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
