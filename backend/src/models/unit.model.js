var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnitSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    unitno: {
      type: String,
      required: true,
    },
    unitdescription: {
      type: String,
    },
    housetype: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HouseType",
      required: true
    }
  }
)

module.exports = mongoose.model('Unit', UnitSchema);