/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

  if (typeof path !== 'string' || path === '') {
    return () => undefined;
  }

  const pathList = path.split('.');

  function getValue(pathObject, Index) {

    if (Index === pathList.length) {
      return pathObject;
    }

    if (pathObject === null || typeof pathObject !== 'object') {
      return undefined;
    }

    const Property = pathList[Index];

    if (!Object.hasOwn(pathObject, Property)) {
      return undefined;
    }

    return getValue(pathObject[Property], Index + 1);
  }

  return function Getter(pathObject) {
    return getValue(pathObject, 0);
  };
}