/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

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
  for (let key in obj) {
    if (!fields.includes(key)) {
      newObject[key] = obj[key];
    }
  }

  return newObject;
};