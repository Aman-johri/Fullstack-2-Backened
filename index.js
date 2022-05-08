const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
const cookieParser = require('cookie-parser');

//express-validator
const {check, validationResult} = require('express-validator/check');
app.use(cors())
const authRoute = require("./routes/auth");
app.use(express.json());


mongoose.connect("mongodb+srv://RitikGupta:Ritikgupta2000@cluster0.vwfs0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


app.listen(5000, () => {
    console.log("Backened is running");
});



