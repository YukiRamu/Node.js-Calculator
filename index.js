const express = require("express");
const logger = require('morgan');
const createError = require('http-errors');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const port = 1515;

//set view engine, import router, set log requests
app.set("views", "views");
app.set("view engine", "ejs");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
const indexRouter = require("./routes/index");

//set path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public', 'css')));
app.use(express.static(path.join(__dirname, 'public', 'js')));
app.use(express.static(path.join(__dirname, 'public', 'html')));

//catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log(req)
  next(createError(404));
});

//error handler

//router config
/* Routing configuration */
app.use("/", indexRouter);
// bundle all the routers under API
//app.use("/api", indexRouter);

//listen on port
app.listen(port, () => {
  console.log(`Application is running  on the port ${port}`);
});