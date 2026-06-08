/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  if (typeof string !== 'string' || string === '') {
    return '';
  }

  if (size === undefined || size < 0) {
    return string;
  }

  else if (size === 0) {
    return '';
  }

  let resultString = '';
  let prevChunk = '';
  let Counter = 0;

  for (const Сhunk of string) {
    if (Сhunk === prevChunk) {
      Counter++;
      if (Counter <= size) {
        resultString += Сhunk;
      }
    }
    else {
      resultString += Сhunk;
      prevChunk = Сhunk;
      Counter = 1;
    }
  }
    
  return resultString;
}