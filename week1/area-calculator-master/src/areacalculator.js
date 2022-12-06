const calculateArea = (choice, side, length, breadth, radius) => {
  let area = 0.0;
  // write logic here
  // note that you check the values passed are not null before performing any operation on them
  if (choice === "square") {
    area = side * 4;
  }
  if (choice === "rectangle") {
    area = breadth * length;
  }
  if (choice === "circle") {
    let pi = 3.14;
    let r = radius * radius;
    area = pi * r;
  }
  if (
    side === undefined &&
    length === undefined &&
    breadth === undefined &&
    radius === undefined
  ) {
    area = -1;
  }
  return area;
};
module.exports = { calculateArea };
