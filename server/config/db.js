const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    "mongodb+srv://juliannedrager:jjSCww9JzZDeTTFK@bigapple.dolymxr.mongodb.net/";

  try {
    const connect = await mongoose.connect(mongoURI);
    console.log(`MnogoDB connected: ${connect.connection.host}...`);
  } catch (err) {
    console.log(`Error: ${err}...`);
    process.exit(1);
  }
};

module.exports = connectDB;
