const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mythSchema = new Schema({
  pantheon: {
    type: String,
    required: true,
    unique: true,
  },
  majorGod:
    {
      name: {
        type: String,
        required: true,
      },
      symbols: [String],
      
      description: {
        type: String,
      },
      portrait:{
        type: String,
      }
    },
  otherGods: [
    {
      name: {
        type: String,
        required: true,
      },
      symbols: [String],
      description: {
        type: String,
      },
      portrait:{
        type: String,
      }
    },
  ],
  manuscript: {
    type: String,
  },
  tales: {
    type: String,
  },
  monsters: [{
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
  }]
});

const mythModel = mongoose.model("Myth", mythSchema, "myths");

module.exports = mythModel;
