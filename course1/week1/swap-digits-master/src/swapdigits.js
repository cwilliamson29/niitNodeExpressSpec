const swapDigits = (number) => {
  let swappedNumber = 0;
  //write logic here
  let string = number.toString();
  let len = string.legnth;
  let j = 0;
  let renew = [];

  for (let i = 1; i < len + 1; ) {
    if (len % 2 == 0) {
      renew.push(string[i]);
    } else {
      renew.push(string[i - 2]);
    }
    ++i;
    ++j;
    swappedNumber = parseInt(renew, 10);
  }
  return swappedNumber;
};

module.exports = swapDigits;
