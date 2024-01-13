const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialExtSchema = new Schema({
  // type: { type: String, enum: ["Pipe", "Fitting"], trim: true},
  // size: { type: String, enum: ["1.5", "2.5"], trim: true},
  // length: { type: Number },
  // kind: { type: String, enum: ["Elbow", "Tee"] },
  // quantity: { type: Number, trim: true},
  // price: { type: Number, trim: true},

  pipe: { type: String, trim: true },
  fittings: { type: String, trim: true },
  tees: { type: String, trim: true },

  details: [
    {
      // pipeSize: [
      //   {
      //     pipeA: { type: Boolean, trim: true },
      //     pipeB: { type: Boolean, trim: true },
      //   },
      // ],
      pipeAPrice: { type: Number, trim: true },
      pipeBPrice: { type: Number, trim: true },
      pipeAQty: { type: Number, trim: true },
      pipeBQty: { type: Number, trim: true },

      // elbowSize: [
      //   {
      //     elbowA: { type: Boolean, trim: true },
      //     elbowB: { type: Boolean, trim: true },
      //   },
      // ],

      elbowAPrice: { type: Number, trim: true },
      elbowBPrice: { type: Number, trim: true },
      elbowAQty: { type: Number, trim: true },
      elbowBQty: { type: Number, trim: true },

      // teeSize: [
      //   {
      //     teeA: { type: Boolean, trim: true },
      //     teeB: { type: Boolean, trim: true },
      //   },
      // ],

      teeAPrice: { type: Number, trim: true },
      teeBPrice: { type: Number, trim: true },
      teeAQty: { type: Number, trim: true },
      teeBQty: { type: Number, trim: true },
    },
  ],
});

const Material = mongoose.model("MaterialExt2", materialExtSchema);

module.exports = Material;
