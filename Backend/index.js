const { exec } = require("child_process");
const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

const port = 8000;

app.get("/", (req, res) => {
  res.send("hello this is from server");
  console.log("trigger");
});

// app.get('/run',(req,res)=>{
//     console.log(res);
// })

app.get("/run", (req, res) => {
  const com = req.query.ip;

  exec(com, (err, stout, stderr) => {
    if (err) {
      res.send(stderr);
    }
    if (res.headersSent !== true) {
      console.log(stout);
      res.send(stout);
    }
    //res.send(stout);
  });
});

app.listen(port, () => {
  console.log(`This server is running on port no: ${port}`);
});
