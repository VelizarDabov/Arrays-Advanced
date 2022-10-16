function negativeOrPositive(input) {
  let result = [];
  for (const element of input) {
    let number = Number(element);
    if (number < 0) {
      result.unshift(number);
    } else {
      result.push(number);
    }
  }
  console.log(result.join("\n"));
}
negativeOrPositive(["7", "-2", "8", "9"]);
