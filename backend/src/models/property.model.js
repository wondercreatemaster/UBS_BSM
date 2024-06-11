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
    required: true,
  },
  UNITDESP: {
    type: String,
    required: true,
    default: ""
  },
  UNITTYPE: {
    type: String,
    required: true,
    default: "",
  },
  OWNERNO: {
    type: String,
    default: "",
  },
  ADD1: {
    type: String,
    default: "",
  },
  ADD2: {
    type: String,
    default: "",
  },
  ADD3: {
    type: String,
    default: "",
  },
  POSTCODE: {
    type: String,
    default: "",
  },
  STATE: {
    type: String,
    default: "",
  },
  COUNTRY: {
    type: String,
    default: "",
  },
  CARPARK: {
    type: String,
    default: "",
  },
  REMARK: {
    type: String,
    default: "",
  },
  STATUS: {
    type: Number,
    default: 0
  },
  HSECODE: {
    type: String,
    required: true,
    default: "",
  },
  PHCODE: {
    type: String,
    default: "",
  },
  AREA: {
    type: Number,
    default: 0
  },
  SELLINGPRI: {
    type: Number,
    default: 0
  },
  PARCELNO: {
    type: String,
    default: "",
  }
})

PropertySchema.pre('validate', function (next)
{
  for (let path in this.schema.paths)
  {
    if (this[path] === null && this.schema.paths[path].options.default !== undefined)
    {
      this[path] = this.schema.paths[path].options.default;
    }
  }
  next();
})

module.exports = mongoose.model('Property', PropertySchema);