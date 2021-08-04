/* Configure Router : this will be imported into index.js (main node js) */
const express = require("express");
const router = express.Router();

router.use(express.static(__dirname + '/public'));

router.use(express.urlencoded());
//router.use(express.json());

router.get('/', (req, res) => {
  console.log(req);
  console.log(res);
  console.log("dirname", __dirname);
  console.log("paramname", req.params.num);
  //res.sendFile(__dirname + "/index.html"); //if html file is within public directory
});

router.post('/', (req, res) => {

  const data = req.body;
  // res.send(data);
  console.log("req data is", data);
});


//////////////// Working on it : not used : try and error //////////////////////

//api for calculate function
// router.get("/add/:num1/:num2", (req, res) => {
//   console.log("I am here");
//   const firstNum = parseInt(req.params.num1);
//   const secondNum = parseInt(req.params.num2);
//   res.send(firstNum);
// });

// router.get("/api", (req, res) => {
//   console.log("I am here");
//   res.send("/calc.html");
// });

// router.post("/api", urlencodedParser, (req, res) => {
//   const firstNum = req.body.num1;
//   console.log("data POSTED", firstNum);
//   res.send('first number is , ' + req.body);
// });



// router.use(bodyParser.json());

// router.get("/calc.html", (req, res) => {
//   console.log(req, res)
//   res.sendFile("calc.html");
// });

module.exports = router;