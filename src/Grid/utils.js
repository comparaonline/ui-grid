/**
 * Removes properties from the given object.
 * This method is used for removing valid attributes from component props prior to rendering.
 *
 * @param {Object} object
 * @param {Array} remove
 * @returns {Object}
 */
export function removeProps(object, remove) {
  const result = {};

  for (const property in object) {
    if (object.hasOwnProperty(property) && remove.indexOf(property) === -1) {
      result[property] = object[property];
    }
  }

  return result;
}

/**
 * Returns whether or not the given value is defined.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isDefined(value) {
  return typeof value !== 'undefined';
}