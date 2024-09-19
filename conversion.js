console.log("inch to ft");

function inchToft(i) {
  result = i / 12;
  const cleanNum = parseInt(result);
  const pointNum = i % 12;
  const finalValue = cleanNum + " ft " + pointNum + " inch ";
  return finalValue;
}
const myHeight = 72;
console.log(inchToft(myHeight));
///----------------------------------------------------------------------------------------------------------
console.log("cm to m");
function cmToM(i) {
  conversion = i / 100;
  cleanNum = parseInt(conversion);
  pointNum = i % 100;
  result = cleanNum + "m " + pointNum + "cm";
  return result;
}
const givenValue = 29476;
console.log(cmToM(givenValue));
//-p---------------------------------------
console.log("leapyear or not");

function isLeapYear(i) {
  if (i % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const year = 2000;
console.log(isLeapYear(year));

console.log("more precise Leapyear");

function leapYear(i) {
  if (i % 100 !== 0 && i % 4 === 0) {
    return true;
  } else if (i % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const year2 = 2100;
console.log(leapYear(year2));
//--------------------------------------------------------------
console.log("odd average");

function oddAvg(a) {
  let sum = 0;
  for (const num of a) {
    if (num % 2 === 0) {
      sum = sum + num;
    }
  }
  newArray = [];
  for (const num of a) {
    if (num % 2 === 0) {
      newArray.push(num);
    }
  }
  totalValue = newArray.length;
  result = sum / totalValue;
  return result;
}
const arrayX = [1, 2, 4, 5, 6, 7, 8, 9, 73];
console.log(oddAvg(arrayX));
//-----------------------------
console.log("removing duplicate values from array");
function removing(a) {
  array2X = [];
  for (const num of a) {
    if (array2X.includes(num) === false) {
      array2X.push(num);
    }
  }
  return array2X;
}
const names = ["navul", "gul", "esbul", "eriul", "gul", "navul"];
const numbers = [1, 2, 3, 1, 2, 4, 5, 4, 3, 6, 2];
console.log(removing(names));
console.log(removing(numbers));
//----------------------------------------------------------
console.log("setting the value opposite");
let a = 5;
let b = 7;
console.log(a, b);
const temp = a;
a = b;
b = temp;
console.log(a, b);
//way-222222222222222222222
let x = 1;
let y = 3;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// console.log(Math.sqrt(5));

///_____________________________________
console.log("tallest number");
const num1 = 34;
const num2 = 35;
const num3 = 45;
const arrayY = [];
arrayY.push(num1, num3, num2);
console.log(Math.max(...arrayY));

///______________________________________
console.log("tallest number");
function getTall(a) {
  let number = a[0];
  for (const value of a) {
    if (number < value) {
      number = value;
    }
  }
  return number;
}
const numberX = [12, 2, 4, 12, 3, 93, 7];
console.log(getTall(numberX));
//----------------------------------
console.log("total price");
const shirt = 3;
const pant = 2;
const shoe = 1;

function price(a, b, c) {
  const shirt = 400;
  const pant = 500;
  const shoe = 650;
  const shirtPrice = shirt * a;
  const pantPrice = pant * b;
  const shoePrice = shoe * c;
  const totalPrice = shirtPrice + pantPrice + shoePrice;
  return totalPrice;
}
console.log(price(shirt, pant, shoe));
//------------------------------
console.log("trying to find the cheapest value from object array");
const value = [
  { mobile: "samsung", price: 20000 },
  { mobile: "samsung", price: 27000 },
  { mobile: "samsung", price: 21000 },
  { mobile: "samsung", price: 24000 },
  { mobile: "samsung", price: 25000 },
];
function arrayObject(a) {
  let cheap = a[0];
  for (const value of a) {
    if (value.price < cheap.price) {
      cheap = value;
    }
  }
  return cheap;
}
console.log(arrayObject(value));
//____________________________________
console.log("price & quantity");
const products = [
  { name: "shirt", price: 900, quantity: 2 },
  { name: "pant", price: 800, quantity: 1 },
  { name: "hat", price: 400, quantity: 1 },
  { name: "sock", price: 70, quantity: 5 },
  { name: "gloves", price: 960, quantity: 2 },
];
function pay(a) {
  let sum = 0;
  let sum2 = 0;
  for (const value of a) {
    sum2 = sum2 + value.quantity;

    sum = sum + value.quantity * value.price;
  }
  const result = "price " + sum + " quantity " + sum2;
  return result;
}
console.log(pay(products));
//_________________________________
console.log('multi layer discount');
function discount(a){
  if(a <= 100){
    result = a * 100;
    return result;
  }
  else if(a <= 200){
    system1 = a - 100;
    result2 = (a * 100)-(system1 * (10 ));
    return result2; 
  }
  else (a>200) {
    system2 = a - 200;
    result3 = (a * 100)-(100 * (10 ))-(system1 * (30 ));
    return result3;
  }
}
const ok = 200;
console.log(discount(ok));