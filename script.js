function fakeBin(x) {
  let array = ("" + x).split("").map(Number);
  let l = array.length;
  
  for (i = 0; i <= l; i++) {

    if (array[i] < 5) {
      array.splice(i, 1, 0);
    }
    if (array[i] >= 5) {
      array.splice(i, 1, 1);
    }
  }
  
  return array.join('');
}

function areaLargestSquare(r) {
  
  let s = Math.pow(r, 2) / 2;
  
  return s;
}

function digits(n) {
  let array = ("" + n).split("").map(Number);
  let l = array.length;
  return l;
}

function opposite(number) {
  return number*(-1);
}


// Test.assertEquals(perimeterSequence(1, 1), 4)
// Test.assertEquals(perimeterSequence(1, 2), 8)
// Test.assertEquals(perimeterSequence(1, 3), 12)

function perimeterSequence(a, n) {
  return a * 4 * n;
}


function removeChar(str){
  let arr = str.split('');
  let l = arr.length;
  
  arr.shift();
  arr.pop();
  a = arr.join('');

  return a;
}


function noSpace(x){
  return x.replace(/\s/g,'')
}


function reverse(str, ending){
  return str.endsWith(ending);
}



function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  }
   return number * 9;
 }


function repeatStr (n, s) {
  let new_str = '';
  while (n-- > 0) new_str += str;
  return new_str;
}