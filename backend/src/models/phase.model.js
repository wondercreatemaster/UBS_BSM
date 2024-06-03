var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhaseSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
)

module.exports = mongoose.model('Phase', PhaseSchema);