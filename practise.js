console.log("Celsius to Fahrenheit.");
function ctf(a) {
  result = a * (9 / 5) + 32;
  return result;
}
const celsius = 30;
console.log(ctf(celsius));

//p-2
console.log("identifing the same number");
function array(array, number) {
  let count = 0;
  for (const i of array) {
    if (i === number) {
      count++;
    }
  }
  return count;
}
const arraygiven = [1, 2, 4, 3, 1, 3];
const lookinFor = 1;
console.log(array(arraygiven, lookinFor));

//p-3
console.log("solving how many vowel is there in a sentence");
function string(a) {
  array = a.split("");
  let count = 0;
  for (const value of array) {
    if (
      value === "a" ||
      value === "e" ||
      value === "o" ||
      value === "u" ||
      value === "i"
    ) {
      count++;
    }
  }
  return count;
}
const sentence = "Write a function to count the number of vowels in a string.";
console.log(string(sentence));

//p-4
console.log("solving the biggest word");
function sentenceX(a) {
  let array = a.split(" ");
  let arrayX = [];
  for (i = 0; i < array.length; i++) {
    let arrayPart = array[i];
    let arrayLength = arrayPart.length;
    arrayX.push(arrayLength);
  }

  let result = Math.max(...arrayX);
  result2 = arrayX.indexOf(result);
  mainResult = array[result2];
  return mainResult;
}
const givingSent = "we nail it and allah will help us";
console.log(sentenceX(givingSent));
console.log(sentenceX('Inshallah klk chance pabo'));

//p-5
console.log('any number between 10 to 20');
console.log(Math.floor(Math.random()*10 + 11));
