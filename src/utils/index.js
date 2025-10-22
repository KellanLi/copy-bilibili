/**
 * 数字转字符串
 * @param {number} count
 * @returns {string}
 */
export const transCountToString = (count) => {
  if (count < 10000) {
    return count;
  }

  if (count < 100000000) {
    return `${(count / 10000).toFixed(1)}万`;
  }

  return `${(count / 100000000).toFixed(1)}亿`;
};
