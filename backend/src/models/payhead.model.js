var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var PayheadSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  RECPTNO: {
    type: String,
    required: true
  },
  RECPTDATE: {
    type: Date,
    required: true
  },
  GROSSAMT: {
    type: Number,
    required: true
  },
  RECAMT: {
    type: Number,
    required: true
  },
  BALAMT: {
    type: Number,
    required: true
  },
  STATUS: {
    type: Number,
    required: true
  },
  REMARK: {
    type: String,
    required: true
  },
  CREATEBY: {
    type: String,
    required: true
  },
  CREATEDATE: {
    type: Date,
    required: true
  },
  UPDDATE: {
    type: Date,
    required: true
  },
  UNITNO: {
    type: String,
    required: true
  },
  OWNERNO: {
    type: String,
    required: true
  },
  PRINTED: {
    type: Number,
    required: true
  },
  EXPORTED: {
    type: Number
  },
  RECPTTYPE: {
    type: Number,
    required: true
  },
  INCTENANT: {
    type: Number,
    required: true
  },
  TENNO: {
    type: String
  },
  PRNCNTRL: {
    type: String
  }
})

module.exports = mongoose.model("Payhead", PayheadSchema);