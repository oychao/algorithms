/**
 * remove blanks in a string
 */

module.exports = str => {
  const arr = str.split('');
  let solidPos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ' ') {
      arr[solidPos++] = arr[i];
    }
  }
  arr.length = solidPos;
  return arr.join('');
};
