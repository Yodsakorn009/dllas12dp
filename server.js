const express = require("express");
const app = express();
const port= process.env.port || 8080


app.use(express.static('frontend'))

app.listen(port, ()=>{
    console.log('App is running on http://localhost:' + port);
    });