function factorial(a) {
  let result = 1;
  if (a == 0) return result;
  if (a < 0) return "Input a positive integer";

  while (a != 0) {
    result *= a;
    a--;
  }
  return result;
}

function gcd(a, b) {
  if (a == 0 && b == 0) return NaN;
  else if (a == 0) return Math.abs(b);
  else if (b == 0) return Math.abs(a);

  a = Math.abs(a);
  b = Math.abs(b);
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let remainder;
  while (max >= min && remainder != 0) {
    remainder = max % min;
    max = min;
    min = remainder;
  }
  return max;
}

function lcm(a, b) {
  let hcf = gcd(a, b);
  let lcm = (a * b) / hcf;
  return lcm;
}

function hexadecimal(a) {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hex = [];
  let remainder;

  if (a == 0) return 0;

  while (a >= 1) {
    remainder = a % 16;
    hex += array[remainder];
    a = Math.floor(a / 16);
  }

  let result = "";
  let length = hex.length;
  while (length > 0) {
    result += hex[length - 1];
    length--;
  }

  return result;
}

module.exports = {
  factorial: factorial,
  gcd: gcd,
  lcm: lcm,
  hexadecimal: hexadecimal,
};
