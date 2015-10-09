/*
 * @summary: An enum manager object
 * @param: name
 *    @type: Object (Array)
 *    @description: array of objects containing a name and values or an array of EnumObjects
 *    @optional: true
 * @returns: an EnumManager
 */
 EnumManager = function (enums) {
  var self = this,
      _enums = [];

  // @summary: Adds an enum
  // @param: vals
  //    @type: Object (Array)
  //    @optional: false
  self.add = function (en) {
    _enums.push(_createEnum(en));
  };

  // @summary: Returns the mapped key or value by calling the EnumObject's map method.
  // @param: name
  //    @type: String
  //    @description: Name of the EnumObject you want to map.
  //    @optional: false
  // @param: input
  //    @type: String || Number
  //    @description: Is either the key or value you want to map
  //    @optional: false
  // @returns: If passed a string, returns a number that represents the key,
  //           otherwise, return the string representing the value.
  self.map = function (name, input) {
    return _getEnum(name).map(input);
  };

  // Get all or just one enum
  self.get = function (name) {
    if (name) {
      return _.findWhere(_enums, { name: name });
    }

    return _enums;
  }

  // Private methods
  // init self._enums with the enums passed in
  var _init = function (enums) {
    _enums = enums.map(function (en) {
      return _createEnum(en);
    });
  };

  // Returns an EnumObject
  var _createEnum = function (en) {
    if (en instanceof EnumObject)
      return en;

    return new EnumObject(en.name, { values: en.values });
  }

  // Gets the EnumObject with the name that is passed in
  var _getEnum = function (name) {
    return _.findWhere(_enums, { name: name });
  };

  // If enums were passed in in an array, add init the manager with the enums.
  if (typeof enums === "object") {
    _init(enums);
  }

  return self;
}
