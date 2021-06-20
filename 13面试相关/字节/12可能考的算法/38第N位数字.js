/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {

  // 小于10返回本身
  if (n <= 9) {
    return n;
  }
  let bit = 1;    // 数字的长度
  let p = 9;
  while (n - bit * p > 0) {
    n -= bit * p;
    bit++;
    p *= 10;
  }

  // num 目标数字
  let num = Math.pow(10, (bit - 1)) + Math.ceil(n / bit) - 1;
  let pos = n % bit; // 在num中的位置
  pos = pos === 0 ? bit : pos;

  return Math.floor(num / Math.pow(10, bit - pos) % 10);



};