const Material = require("../models/MaterialExt");

// Define specific prices for different materials
// const PIPE_1_5_PRICE = 10; // Adjust this based on your actual price
// const PIPE_2_5_PRICE = 15; // Adjust this based on your actual price
// const ELBOW_PRICE = 5; // Adjust this based on your actual price
// const TEE_PRICE = 8; // Adjust this based on your actual price

// Get all materials
exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new material
exports.createMaterial = async (req, res) => {
  let newMaterial = new Material({
    // pipe: req.body.pipe,
    // fittings: req.body.fittings,
    // tees: req.body.tees,
    details: req.body.details,

    pipeSize: req.body.pipeSize,
    // pipe sizes
    pipeA: req.body.pipeA,
    pipeB: req.body.pipeB,
    // pipe pricing
    pipeAPrice: req.body.pipeAPrice,
    pipeBPrice: req.body.pipeBPrice,
    // pipe lengths
    pipeAQty: req.body.pipeAQty,
    pipeBQty: req.body.pipeBQty,

    elbowSize: req.body.elbowSize,
    // elbow sizes
    elbowA: req.body.elbowA,
    elbowB: req.body.elbowB,
    //  elbow pricing
    elbowAPrice: req.body.elbowAPrice,
    elbowBPrice: req.body.elbowBPrice,
    // elbow quantity
    elbowAQty: req.body.elbowAQty,
    elbowBQty: req.body.elbowBQty,

    elbowSize: req.body.elbowSize,
    // tee sizes
    teeA: req.body.teeA,
    teeB: req.body.teeB,
    // tee pricing
    teeAPrice: req.body.teeAPrice,
    teeBPrice: req.body.teeBPrice,
    // tee quantity
    teeAQty: req.body.teeAQty,
    teeBQty: req.body.teeBQty,
  });

  try {
    await newMaterial.save();
    res.status(201).json(newMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a material
exports.updateMaterial = async (req, res) => {
  try {
    const updatedMaterial = await Material.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get MaterialId
exports.getMaterialById = async (req, res) => {
  // console.log(req.body.details);
  try {
    const getTheMaterialID = await Material.findById({ _id: req.params.id });
    res.json(getTheMaterialID);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update via filter
exports.updateDetailedMaterial = async (req, res) => {
  try {
    const getID = req.params.id;
    const getDetID = req.params.detailsId;
    // console.log(req.body.pipeAQty);
    const updatedDetails = await Material.findOneAndUpdate(
      {
        _id: getID,
        details: { $elemMatch: { _id: getDetID } },
      }, // FILTER

      {
        $set: {
          "pipeSize.$.pipeA": req.body.pipeA, // UPDATE
          "pipeSize.$.pipeB": req.body.pipeB, // UPDATE

          "elbowSize.$.elbowA": req.body.elbowA, // UPDATE
          "elbowSize.$.elbowB": req.body.elbowB, // UPDATE

          "teeSize.$.teeA": req.body.teeA, // UPDATE
          "teeSize.$.teeB": req.body.teeB, // UPDATE

          "details.$.pipeAPrice": req.body.pipeAPrice, // UPDATE
          "details.$.pipeBPrice": req.body.pipeBPrice, //UPDATE
          "details.$.pipeAQty": req.body.pipeAQty, // UPDATE
          "details.$.pipeBQty": req.body.pipeBQty, // UPDATE

          "details.$.elbowAPrice": req.body.elbowAPrice, // UPDATE
          "details.$.elbowBPrice": req.body.elbowBPrice, // UPDATE
          "details.$.elbowAQty": req.body.elbowAQty, // UPDATE
          "details.$.elbowBQty": req.body.elbowBQty, // UPDATE

          "details.$.teeAPrice": req.body.teeAPrice, // UPDATE
          "details.$.teeBPrice": req.body.teeBPrice, // UPDATE
          "details.$.teeAQty": req.body.teeAQty, // UPDATE
          "details.$.teeBQty": req.body.teeBQty, // UPDATE
        },
      },

      { new: true, safe: true, upsert: true }
    );
    res.status(200).json({
      success: true,
      message: "Post Updated",
      getID,
      getDetID,
      updatedDetails,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a material
exports.deleteMaterial = async (req, res) => {
  try {
    await Material.findByIdAndDelete(req.params.id);
    res.json({ message: "Material deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// {
//   _id: req.params.id,
//   pipe: { $elemMatch: { _id: req.params.detailsId } },
// }, // FILTER

// {
//   _id: req.params.detailsId,
//   pipe: { $elemMatch: { _id: req.params.elbowSize } },
// }, // FILTER

// {
//   _id: req.params.detailsId,
//   pipe: { $elemMatch: { _id: req.params.teeSize } },
// }, // FILTER
