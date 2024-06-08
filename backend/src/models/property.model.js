var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  UNITNO: {
    type: String,
    required: true
  },
  UNITDESP: {
    type: String
  },
  UNITTYPE: {
    type: String
  },
  OWNERNO: {
    type: String
  },
  ADD1: {
    type: String
  },
  ADD2: {
    type: String
  },
  ADD3: {
    type: String
  },
  POSTCODE: {
    type: String
  },
  STATE: {
    type: String
  },
  COUNTRY: {
    type: String
  },
  CARPARK: {
    type: String
  },
  REMARK: {
    type: String
  },
  STATUS: {
    type: Number
  },
  HSECODE: {
    type: String
  },
  PHCODE: {
    type: String
  },
  AREA: {
    type: Number
  },
  SELLINGPRI: {
    type: Number
  },
  PARCELNO: {
    type: String
  }
})

module.exports = mongoose.model('Property', PropertySchema);