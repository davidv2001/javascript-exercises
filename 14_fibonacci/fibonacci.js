const fibonacci = function (num) {
  let count = [];
  if (num < 0) return `OOPS`;
  if (typeof num === "string") +num;
  for (let i = 0; i <= num; i++) {
    if (i === 0 || i === 1) count.push(i);
    else {
      count.push(count[i - 1] + count[i - 2]);
    }
  }
  return count[num];
};

// Do not edit below this line
module.exports = fibonacci;
