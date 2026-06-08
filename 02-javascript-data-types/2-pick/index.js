/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

  /* Как я понимаю, в JS нет единого и надежного способа проверки
  содержимого переменной на объект, поэтому нагородил каскад проверок. */
  if (obj === null) {
    return;
  }

  if (typeof obj !== 'object') {
    return;
  }

  if (Array.isArray(obj)) {
    return;
  }
  
  /* Проверять fields, наверное смысла нет?
  Так как чисто теоретически оно всегда массив */

  let newObject = {};
//  for (let key of fields) {
//    if (key in obj) {
//      newObject[key] = obj[key];
//    }
//  }

  for (const [key, value] of Object.entries(obj)) {
    if (fields.includes(key)) {
      newObject[key] = obj[key];
    }
  }

  return newObject;
};
