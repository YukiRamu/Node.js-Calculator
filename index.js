const express = require("express");
const logger = require('morgan');
const path = require('path');
const app = express();
const port = 1515;

// log requests
app.use(logger('dev'));

//set view engine
app.set("views", "views");
app.set("view engine", "ejs");


//import router
const indexRouter = require("./routes/index");
const { urlencoded } = require("express");

//set path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public', 'css')));
app.use(express.static(path.join(__dirname, 'public', 'js')));
app.use(express.static(path.join(__dirname, 'public', 'html')));

//router config
/* Routing configuration */
app.use("/", indexRouter);
// bundle all the routers under API
//app.use("/api", indexRouter);

//listen on port
app.listen(port, () => {
  console.log(`Application is running  on the port ${port}`);
});