/**
* length of longest substring without repeating characters
*/

const calcLlswrc = s => {
  const cm = new Map();
  let i, len, c, j, to, rs = 0, re = 0, cs = 0, ce = 0;
  for (i = 0, len = s.length; i < len; i++) {
    c = s[i];
    if (cm.has(c)) {
      j = cs;
      to = cm.get(c);
      while (j <= to) {
        cm.delete(s[j++]);
      }
      cs = j;
    }
    ce = i + 1;
    cm.set(c, i);
    if (ce - cs > re - rs) {
      rs = cs;
      re = ce;
    }
  }
  return re - rs;
};

module.exports = calcLlswrc;
