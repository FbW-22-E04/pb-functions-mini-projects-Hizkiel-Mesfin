// The Fortune Teller
function tellFortune(numOfchildren, partnerName, geoLocation, jobTitle) {
  console.log(
    `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numOfchildren} kids.`
  );
}

tellFortune(12, "John", "Mars", "Debris cleaner");
tellFortune(0, "Francis n'gannou", "Cameroon", "boxer");
tellFortune(33, "Nikita Niegngo", "Kenya", "farmer");

// The Puppy Age Calculator

function calculateDogAge(puppyAge, humanYears) {
  return `Your doggie is ${
    puppyAge * 7
  } years old in dog years and the human is ${Math.round(
    humanYears / 7
  )} years old in dog years`;
}

console.log(calculateDogAge(0.5, 23));
console.log(calculateDogAge(2, 76));
console.log(calculateDogAge(3, 29));

// The Lifetime Supply Calculator

function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  const daysLeft = Math.round((maxAge - age) * 356.25);

  return `You will need ${
    daysLeft * amountPerDay
  } to last you until the ripe age of ${maxAge}`;
}

console.log(calculateSupply(99, 2));
console.log(calculateSupply(56, 8));
console.log(calculateSupply(21, 4));

// The Geometrizer

function calcCircumference(radius) {
  const PI = 3.14;

  return `The circumference is ${2 * PI * radius}`;
}

console.log(calcCircumference(2));

function calcArea(radius) {
  const PI = 3.14;
  return `The area is ${PI * radius ** 2}`;
}

console.log(calcArea(7));

// The Temperature Converter

function celciusToFahrenheit(celcius) {
  const fahrenheit = celcius * (9 / 5) + 32;
  return `${celcius}°C is ${fahrenheit}°F`;
}

function fahrenheitToCelcius(fahrenheit) {
  const celcius = (fahrenheit - 32) * (5 / 9);
  return `${fahrenheit}°F is ${celcius}°C`;
}

console.log(celciusToFahrenheit(32));
console.log(fahrenheitToCelcius(89.6));
