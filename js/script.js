function sakib(numbers) {
  if (numbers > 0) {
    console.log("Positive");
  } else if (numbers < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

console.log(sakib(5)); // Positive
console.log(sakib(-5)); // Negative
console.log(sakib(0)); // Zero
