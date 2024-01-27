const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require("cors");
const logger = require("morgan");
const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(jsonParser); // use it globally
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

app.use(cors());
app.use(logger("dev"));

//  routers
const userRouter = require("./routers/userRouter");
const generalRouter = require("./routers/generalRouter");
const optionsRouter = require("./routers/optionsRouter");
const materialRouter = require("./routers/materialRouter");
const laborRouter = require("./routers/laborRouter");
const emailRouter = require("./routers/EmailRouter");

app.use("/user", userRouter);
app.use("/general", generalRouter);
app.use("/options", optionsRouter);
app.use("/materials", materialRouter);
app.use("/labor", laborRouter);
app.use("/", emailRouter);

// email data
// emailTemplate;

const server = app.listen(5000, () =>
  console.log(`Server running on port ${server.address().port}`)
);
