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
  newArray=[]
  for (const num of a) {
    if (num % 2 === 0) {
     newArray.push(num)
    }
  }
   totalValue = newArray.length
  result = sum / totalValue;
  return result;
}
const arrayX = [1, 2, 4, 5, 6, 7, 8, 9, 73];
console.log(oddAvg(arrayX));
//-----------------------------
console.log('removing duplicate values from array');
function removing(a){
      array2X=[];
    for (const num of a ){ 
        if(array2X.includes(num)===false){
            array2X.push(num)
        } 
    }
      return array2X;
}
const names = ['navul','gul','esbul','eriul','gul','navul']
const numbers = [1,2,3,1,2,4,5,4,3,6,2]
console.log(removing(names));
console.log(removing(numbers));