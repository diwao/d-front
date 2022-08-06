'use strict';

export default <T>(array: Array<T>): Array<T> => {
  let n: number = array.length;
  while (n) {
    const i: number = Math.floor(Math.random() * n--);
    const t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
};
