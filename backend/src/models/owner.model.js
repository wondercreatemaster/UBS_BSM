var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OwnerSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    UNITNO: {
      type: String
    },
    OWNERNO: {
      type: String
    },
    OWNNAME: {
      type: String
    },
    GENDER: {
      type: Number
    },
    ETHNIC: {
      type: String
    },
    OLDIC: {
      type: String
    },
    NEWIC: {
      type: String
    },
    PASSPORT: {
      type: String
    },
    DOB: {
      type: Date
    },
    MSTATUS: {
      type: Number
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
    HOMETEL: {
      type: String
    },
    MONTEL: {
      type: String
    },
    OCCUP: {
      type: String
    },
    EMPLOYER: {
      type: String
    },
    OFFTEL: {
      type: String
    },
    OWNDATE: {
      type: Date
    },
    COMPCODE: {
      type: String
    },
    BANKCODE: {
      type: String
    },
    DEPOSIT: {
      type: Number
    },
    TRANSDATE: {
      type: Date
    },
    STATUS: {
      type: Number
    },
    CASENO: {
      type: String
    },
    PREMAILADD: {
      type: Number
    },
    PAYTERM: {
      type: Number
    },
    BADDEBT: {
      type: Number
    },
    OWNERCODE: {
      type: String
    },
    OWNEDBY: {
      type: Number
    },
    ROC: {
      type: String
    },
    PARCELNO: {
      type: String
    },
    ELECREFNO: {
      type: String
    },
    WATERREFNO: {
      type: String
    },
    GASREFNO: {
      type: String
    },
    DIRECTOR: {
      type: String
    },
    BUSITYPE: {
      type: String
    },
    SOLICODE: {
      type: String
    },
    BANKREFNO: {
      type: String
    },
    SOLIREFNO: {
      type: String
    },
    INSUREFNO: {
      type: String
    },
    EMAIL: {
      type: String
    },
    RESSTS: {
      type: Number
    },
    OWNER: {
      type: Number
    },
    RESNAME: {
      type: String
    },
    RESGENDER: {
      type: Number
    },
    RESETHNIC: {
      type: String
    },
    RESNEWIC: {
      type: String
    },
    RESOLDIC: {
      type: String
    },
    RESPSPORT: {
      type: String
    },
    RESDOB: {
      type: Date
    },
    RESMSTATUS: {
      type: String
    },
    RESHOMETEL: {
      type: String
    },
    RESMOBTEL: {
      type: String
    },
    MOVEDATE: {
      type: Date
    },
    NATION: {
      type: String
    },
    RESNATION: {
      type: String
    },
    RELATION: {
      type: Number
    },
    RELOTHER: {
      type: String
    },
    GRPCODE: {
      type: String
    },
    GLCODE: {
      type: String
    },
    TENNO: {
      type: String
    },
    LATEINT: {
      type: String
    }
  }
)

module.exports = mongoose.model('Owner', OwnerSchema);