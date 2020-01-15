const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const loginMongo = require("./utils/mongoConnect");

const app = express();

mongoose.connect(
  loginMongo, // mongodb+srv://<username>:<password>@cluster0.mongodb.net/week10?retryWrites=true&w=majority
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
