var exports = module.exports = {};

exports.token = "Place token here";

exports.getPrefix = function() {
  return this.prefix || '#';
}

exports.setPrefix = function(prefix) {
  this.prefix = prefix;
  return this.prefix;
}