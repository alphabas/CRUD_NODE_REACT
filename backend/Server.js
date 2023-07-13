const express = require("express");
const mongoose = require("mongoose");
const uuid = require("uuid");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/TaskRoute");
const routesProduct = require("./routes/ProductRoute");
const port = process.env.PORT || 4001;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://0.0.0.0:27017/NODE_SIMPLEARN", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO MONGO DB");
    app.use("/api", routes, routesProduct);

    app.listen(port, () => {
      console.log(`THIS APP RUN ON PORT - ${port}`);
    });
  })
  .catch((error) => {
    console.log(`ERROR TO CONNECTED : ${error}`);
  });
