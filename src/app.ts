import express = require("express");

const app = express();
app.set("port", process.env.PORT || 3000);


app.get('/hello', (req, res)=>{
  res.send('How\'s it going?');
});

export default app;


