var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InvheadSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  INVNO: {
    type: String,
    required: true
  },
  INVDATE: {
    type: Date,
    required: true
  },
  INVDUEDATE: {
    type: Date,
    required: true
  },
  INTDATE: {
    type: Date,
    required: true
  },
  INVTYPE: {
    type: Number,
    required: true
  },
  ISSMETHOD: {
    type: Number,
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
  TOTAMT: {
    type: Number,
    required: true
  },
  TOTINT: {
    type: Number,
    required: true
  },
  TOTREC: {
    type: Number,
    required: true
  },
  PAYTERM: {
    type: Number,
    required: true
  },
  REMARK: {
    type: String,
    required: true
  },
  ISSDATE: {
    type: Date,
    required: true
  },
  ISSBY: {
    type: String,
    required: true
  },
  STATUS: {
    type: Number,
    required: true
  },
  BDAMT: {
    type: Number,
    required: true
  },
  BDDATE: Date,
  PRINTED: {
    type: Number
  },
  CHARCODE: {
    type: String,
    required: true
  },
  QTY: {
    type: Number,
    required: true
  },
  CHARRATE: {
    type: Number,
    required: true
  },
  REMDATE1: Date,
  REMDATE2: Date,
  REMDATE3: Date,
  REMAMT1: String,
  REMAMT2: String,
  REMAMT3: String,
  EXPORTED: String,
  METER: String,
  MREFNO: String,
  INCTENANT: Number,
  TENNO: String,
  BNMROUD: {
    type: Number,
    required: true
  },
  TAXCODE: String,
  TAXDESP: String,
  TAXPER: {
    type: Number,
    required: true
  },
  TAXAMT: {
    type: Number,
    required: true
  },
  TAXAMTINC: Number,
  RECKEY: String,
  DEBINVNO: String,
  REASON: String,
  PRNCNTRL: String,
  TENABLE: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Invhead", InvheadSchema);