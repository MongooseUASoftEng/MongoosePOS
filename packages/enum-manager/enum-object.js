/*
 * @summary: An enum object
 * @param: name
 *    @type: String
 *    @description: name of the enum object
 *    @optional: true
 * @param: options.values
 *    @type: Object (Array)
 *    @description: Array of values for enum
 *    @optional: true

 * @returns: an EnumObject
 */
EnumObject = function (name, options) {
  var self = this,
      _values = [];

  // Give this a property named 'name' but don't allow it to be changed
  if (!name)
    throw new Error("You need to pass in a name for the EnumObject");

  Object.defineProperty(self, "name", {
    value: name,
    configurable: false,
    writable: false
  });

  // @summary: Returns the mapped value of the input
  // @param: input
  //    @type: String || Number
  //    @description: Is either the key or value you want to map
  //    @optional: false
  // @returns: If passed a string, returns a number that represents the key,
  //           otherwise, return the string representing the value.
  self.map = function (input) {
    // If its not a number(NaN), return the key (index)
    // Otherwise return the value
    return isNaN(input) ?
      _getKey(input) :
      _getVal(input);
  };

  // Get the values
  self.values = function () {
    return _values;
  };

  // Private methods
  // @summary: Creates the enum by storing values in an array
  // @param: vals
  //    @type: Object (Array)
  //    @optional: false
  var _init = function (vals) {
    if (! vals.length)
      throw new Error("You didn't pass any values in.");

    _values = vals;
  };

  // get the key for the value passed in
  var _getKey = function (val) {
    return _.indexOf(_values, val);
  };

  // get the value for the key passed in
  var _getVal = function (key) {
    return _values[key];
  };

  // If passed values, create the enum.
  if (! options.values)
    throw new Error("You did");

  _init(options.values);

  return self;
}
