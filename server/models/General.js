const mongoose = require("mongoose");

const GeneralSchema = new mongoose.Schema({
  number: { type: Number },
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: Number, required: true },
  reqby: { type: String, required: true },
  management: { type: String, required: true },
  fdnytest: { type: Boolean, required: true },
  violation: { type: Boolean, required: true },
  violationdate: { type: String, required: true },
  estimatedate: { type: String, required: true },
});

module.exports = mongoose.model("General", GeneralSchema);
