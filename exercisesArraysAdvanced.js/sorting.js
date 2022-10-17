function sortedArray(arr) {
  let sortedNumbers = arr.sort((a, b) => a - b);
  let resultArray = [];

  for (let i = 0; i < sortedNumbers.length; i++) {
    let lastElement = sortedNumbers.pop();
    let firstElement = sortedNumbers.shift();
    resultArray.push(lastElement);
    resultArray.push(firstElement);
  }
  resultArray.push(sortedNumbers.pop());
  resultArray.push(sortedNumbers.shift());

  console.log(resultArray.join(' '));
}
sortedArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
