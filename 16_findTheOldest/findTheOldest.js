const findTheOldest = function (arr) {
  let highest = 0;
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].yearOfDeath === undefined) {
      if (2025 - arr[i].yearOfBirth > highest) {
        highest = 2025 - arr[i].yearOfBirth;
        index = i;
      }
    }
    console.log(arr[i].yearOfDeath);
    if (arr[i].yearOfDeath - arr[i].yearOfBirth > highest) {
      highest = arr[i].yearOfDeath - arr[i].yearOfBirth;
      index = i;
    }
  }

  return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
