const mongoose = require("mongoose");

const OkrSchema = mongoose.Schema(
  {
    objective: {
      type: String,
      required: [true, "El objetivo es requerido"],
    },
    title: {
      type: String,
      required: [true, "El titulo es requerido"],
    },
    managerId: {
      type: String,
      required: [true, "El titulo es requerido"],
    },
    description: {
      type: String,
    },
    verticalId: {
      type: String,
      required: [true, "El titulo es requerido"],
    },
    currentProgress: {
      type: Number,
    },
    historicalProgress: {
      type: Array,
    },
  },
  {
    versionKey: false,
    collection: "Okrs",
  }
);

module.exports = mongoose.model("OKR", OkrSchema);
