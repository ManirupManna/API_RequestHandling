require("dotenv").config();
const express = require("express");
const port = process.env.DEV_PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hit /bfhl endpoint with a post request</h1>");
});

app.post("/bfhl", (req, res) => {
  const array = req.body.data;
  const responseObj = {
    is_success: true,
    user_id: "manirup_manna_13062002",
    email: "manirup1163.be20@chitkarauniversity.edu.in",
    roll_number: 2011981163,
    odd_numbers: [],
    even_numbers:[],
    alphabets: [],
  };
  array.forEach((item) => {
    let num = parseInt(item);
    if (num) {
      if(num%2==0)
        responseObj.even_numbers.push(num);
      else
        responseObj.odd_numbers.push(num);
    }
    else responseObj.alphabets.push(item.toUpperCase());
  });
  res.json(responseObj);
});

app.listen(port, (err) => {
  const starterText = err
    ? `Error in starting server`
    : `Server started at port http://localhost:${port}/`;
  console.log(starterText);
});
