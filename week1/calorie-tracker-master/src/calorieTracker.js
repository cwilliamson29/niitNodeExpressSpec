const calculateWeightLostInAMonth = (
  cycling,
  running,
  swimming,
  extraCalorieInTake
) => {
  let weightLostInAMonth = 0;

  // write logic here

  let combined = cycling + swimming + running;
  let monthly = combined * 2 * 4;
  let ext = extraCalorieInTake * 30;

  let total = monthly - ext;

  weightLostInAMonth = total / 1000;
  if (running === 0 && swimming === 0) {
    weightLostInAMonth = -1;
  }
  return weightLostInAMonth;
};

module.exports = calculateWeightLostInAMonth;
