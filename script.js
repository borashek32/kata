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

console.log(digits(1234));
