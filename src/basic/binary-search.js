/**
* binary search
*/

const defaultCompare = require('./default-compare');

module.exports = {
  precise(a, t, c = defaultCompare) {
    let l = 0, r = a.length - 1, m;
    while (l <= r) {
      m = ~~((l + r) / 2);
      if (c(a[m], t) < 0) {
        l = m + 1;
      } else if (c(a[m], t) > 0) {
        r = m - 1;
      } else {
        return m;
      }
    }
    return undefined;
  },
  leftMost(a, t, c = defaultCompare) {
    let l = 0, r = a.length - 1, m;
    while (l < r) {
      m = ~~((l + r) / 2);
      if (c(a[m], t) < 0) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return l;
  },
  rightMost(a, t, c = defaultCompare) {
    let l = 0, r = a.length - 1, m;
    while (l < r) {
      m = ~~((l + r) / 2);
      if (c(a[m], t) <= 0) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return l - 1;
  }
};
