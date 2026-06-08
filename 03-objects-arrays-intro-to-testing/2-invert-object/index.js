/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns the new object or undefined if nothing did't pass
 */
export function invertObj(obj) {

  if (obj === null) {
    return;
  }

  if (typeof obj !== 'object') {
    return;
  }

  if (Array.isArray(obj)) {
    return;
  }

  let newObject = {};
  for (const [key, value] of Object.entries(obj)) {
    newObject[value] = key;
  }

  return newObject;
}