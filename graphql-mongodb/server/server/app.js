const express = require("express");
var dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3005;

dotenv.config();

var url = process.env.MONGOLAB_URI;

const dbConnection = url;

mongoose
  .connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("Connected to DB!"))
  .catch((error) => console.log(error));

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, (err) => {
  err
    ? console.log(error)
    : console.log("Server started! 'http://localhost:3005/graphql'");
});
