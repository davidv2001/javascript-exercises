const palindromes = function (str) {
  // Normalize the string: lowercase + remove non-alphanumeric
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  let reverseStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reverseStr += cleanStr[i];
  }

  return reverseStr === cleanStr;
};
// Do not edit below this line
module.exports = palindromes;
