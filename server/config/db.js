const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    "";

  try {
    const connect = await mongoose.connect(mongoURI);
    console.log(`MnogoDB connected: ${connect.connection.host}...`);
  } catch (err) {
    console.log(`Error: ${err}...`);
    process.exit(1);
  }
};

module.exports = connectDB;
