const mongoose = require("mongoose");

const OptionsSchema = new mongoose.Schema({
  centralStation: { type: Boolean },
  firePump: { type: Boolean },
  jockeyPump: { type: Boolean },
  localPump: { type: Boolean },

  combo: { type: Boolean },
  sprinkler: { type: Boolean },
  standPipe: { type: Boolean },

  comboCurbBox: { type: Boolean },
  comboLocation: { type: Boolean },
  callFDNY: { type: Boolean },
});

module.exports = mongoose.model("Options", OptionsSchema);
