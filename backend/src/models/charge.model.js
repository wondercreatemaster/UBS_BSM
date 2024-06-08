var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChargeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  CHARCODE: {
    type: String,
    required: true
  },
  DESP: String,
  CALMETHOD: Number,
  RATE: Number,
  STATUS: Number,
  GLCODE: String,
  UOM: String,
  MINCHAR: Number,
  TYPE: Number,
  INTERVAL: Number,
  INTTERM: Number,
  LATECHAR: Number,
  SHOWMONTH: Number,
  SHOWFINCR: Number,
  SHOWSOLI: Number,
  SHOWINSU: Number,
  GENREMARK: Number,
  DURATION: Number,
  DURTYPE: Number,
  OPTION: Number,
  WITHEND: Number,
  METERTYPE: Number,
  METERCAL: Number,
  RATE1: Number,
  RATE2: Number,
  RATE3: Number,
  RATE4: Number,
  RATE5: Number,
  METER1: Number,
  METER2: Number,
  METER3: Number,
  METER4: Number,
  METER5: Number,
  DEFLATEINT: Number,
  CPARKTYPE: Number,
  EXTCHAR: Number,
  PRICEROUND: Number,
  BNMRND: Number,
  TAXCODE: Number,
  TAXPER: Number,
  TAXAMT: Number,
  AMTTAX: Number,
  ACCNO: Number
})

module.exports = mongoose.model("Charge", ChargeSchema);