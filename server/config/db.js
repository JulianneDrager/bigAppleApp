const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI =
    "mongodb+srv://big-apple-app:q3GZWAz3v9Tl2QBE@cluster0.4wnzb2v.mongodb.net/";

  try {
    const connect = await mongoose.connect(mongoURI);
    console.log(`MnogoDB connected: ${connect.connection.host}...`);
  } catch (err) {
    console.log(`Error: ${err}...`);
    process.exit(1);
  }
};

module.exports = connectDB;
