const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const laborSchema = new Schema({
  numberOfMen: { type: Number },
  numberOfDays: { type: Number },
  hoursOfWork: { type: Number },
  price: { type: Number },

  straightTime: { type: Boolean },
  overtime: { type: Boolean },
  overtimeHours: { type: Number },
  prevailingWage: { type: Boolean },
  prevailingWageHours: { type: Number },
  prevailingWageDays: { type: Number },
});

const Labor = mongoose.model("Labor", laborSchema);

module.exports = Labor;
