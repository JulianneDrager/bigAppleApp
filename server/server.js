const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));

//  routers
const userRouter = require("./routers/userRouter");
const generalRouter = require("./routers/generalRouter");
const optionsRouter = require("./routers/optionsRouter");
const materialRouter = require("./routers/materialRouter");
const laborRouter = require("./routers/laborRouter");
// const signageRouter = require("./routers/signageRouter");
// const systemTypeRouter = require("./routers/systemTypeRouter");
// const typeOfBuildingRouter = require("./routers/typeOfBuildingRouter");

app.use("/user", userRouter);
app.use("/general", generalRouter);
app.use("/options", optionsRouter);
app.use("/materials", materialRouter);
app.use("/labor", laborRouter);
// app.use("/signage", signageRouter);
// app.use("/systemType", systemTypeRouter);
// app.use("/typeOfBuilding", typeOfBuildingRouter);

const server = app.listen(5000, () =>
  console.log(`Server running on port ${server.address().port}`)
);
