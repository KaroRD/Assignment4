let n = 7;
let plus = "+";
let space = " ";
let step = 0;
let spaceCount = n - 1;
let plusCount = 1;

while (step < n) {
  console.log(space.repeat(spaceCount) + plus.repeat(plusCount));
  step++;
  spaceCount--;
  plusCount++;
}
