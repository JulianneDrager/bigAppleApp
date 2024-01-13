const mongoose = require("mongoose");

const GeneralSchema = new mongoose.Schema({
  number: { type: Number },
  name: { type: String },
  phone: { type: Number },
  street: { type: String },
  city: { type: String },
  zipcode: { type: Number },
  notes: { type: String },
  reqBy: { type: String },
  management: { type: String },
  fdnyTest: { type: String },
  violation: { type: Boolean },
  violationDate: { type: String },
  estimateDate: { type: String },
});

module.exports = mongoose.model("General", GeneralSchema);
