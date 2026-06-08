const MAIN_COLLATOR = new Intl.Collator(
  ['ru-RU', 'en-US'],
  {
    usage: "sort",
    caseFirst: "upper",
  }
);

/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  /* Касаемо проверки строки неуверен, вроде как более надежно будет через
  "Object.prototype.toString.call()", но все же остановился на "typeof" */
  if (!Array.isArray(arr) || typeof param !== 'string') {
    return;
  }

  const upperParam = param.toUpperCase();

  let byOrder;
  if (upperParam === 'ASC' || upperParam === 'DESC') {
    byOrder = upperParam;
  }
  else {
    byOrder = 'ASC';
  }
  
  const sortedArray = [...arr].sort((a, b) => {
    let comparison = MAIN_COLLATOR.compare(a, b);

    if (byOrder === 'DESC') {
      return -comparison;
    }

    return comparison;
  });

  return sortedArray;
}
