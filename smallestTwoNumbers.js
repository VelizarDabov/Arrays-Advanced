function smallestTwo(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b).slice(0, 2);
  console.log(sortedNumbers.join(" "));
}
smallestTwo([30, 15, 50, 5]);
