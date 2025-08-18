const isPowerOfFour = function (n) {
  if (n < 1) return false;
  while (n % 4 === 0) {
    n = n / 4;
  }
  return n === 1;
};

const powerOfFour = isPowerOfFour(64);
console.log(powerOfFour);
