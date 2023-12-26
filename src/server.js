//require
require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

//init
const app = express();
const port = process.env.PORT;

//view engine
configViewEngine(app);

//route
app.use(webRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
