// Get elements
one = document.getElementById('one')
two = document.getElementById('two')
three = document.getElementById('three')
four = document.getElementById('four')
five = document.getElementById('five')
six = document.getElementById('six')
seven = document.getElementById('seven')
eight = document.getElementById('eight')
nine = document.getElementById('nine')
zero = document.getElementById('zero')
plus = document.getElementById('plus')
subtract = document.getElementById('subtract')
clr = document.getElementById('clr')
del = document.getElementById('del')
percent = document.getElementById('percent')
divide = document.getElementById('divide')
dot = document.getElementById('dot')
equals = document.getElementById('equals')
text = document.getElementById('text')
multiply = document.getElementById('multiply')
result = document.getElementById('result')
ans = document.getElementById('ans')
// click listener
one.addEventListener('click', calcOne);
two.addEventListener('click', calcTwo);
three.addEventListener('click', calcThree);
four.addEventListener('click', calcFour);
five.addEventListener('click', calcFive);
six.addEventListener('click', calcSix);
seven.addEventListener('click', calcSeven);
eight.addEventListener('click', calcEight);
nine.addEventListener('click', calcNine);
zero.addEventListener('click', calcZero);
plus.addEventListener('click', calcPlus);
subtract.addEventListener('click', calcSub);
clr.addEventListener('click', calcClr);
del.addEventListener('click', calcDel);
percent.addEventListener('click', calcPercent);
divide.addEventListener('click', calcDivide);
dot.addEventListener('click', calcDot);
equals.addEventListener('click', calcEquals);
multiply.addEventListener('click', calcMultiply);
ans.addEventListener('click', ansCalc)
//get symbol
let symbol = null;

function ansCalc(e) {
  text.innerText = text.innerText + result.innerText;
}

function calcClr(e) {
  text.innerText = "";
  result.innerText = '';
  symbol = null;
}

function calcDel(e) {
  text.innerText = text.innerText.substr(0, text.innerText.length - 1)
}

function calcEquals(e) {
  if (symbol == null) {
    if (isNaN(result.innerText)) {
      result.innerText = "Error";
    } else {
      result.innerText = text.innerText;
    }
  } else if (symbol == '-') {
    result.innerText = splitNumSub(text.innerText)
  } else if (symbol == '+') {
    result.innerText = splitNumAdd(text.innerText)
  } else if (symbol == 'x') {
    result.innerText = splitNumMul(text.innerText)
  } else if (symbol == '/') {
    result.innerText = splitNumDiv(text.innerText)
  }
  //text.innerText = result.innerText;
  //result.innerText = "";
  text.innerText = '';
  symbol = null;
}

function calcSub(e) {
  if (!(isNaN(text.innerText))) {
    text.innerText = text.innerText + '-';
    symbol = '-';
  } else {
    if (symbol == '-') {
      result.innerText = splitNumSub(text.innerText)
    } else if (symbol == '+') {
      result.innerText = splitNumAdd(text.innerText)
    } else if (symbol == 'x') {
      result.innerText = splitNumMul(text.innerText)
    } else if (symbol == '/') {
      result.innerText = splitNumDiv(text.innerText)
    }
    symbol = '-';
    text.innerText = result.innerText + '-';
  }
}

function calcPlus(e) {
  if (!(isNaN(text.innerText))) {
    text.innerText = text.innerText + '+';
    symbol = '+';
  } else {
    if (symbol == '-') {
      result.innerText = splitNumSub(text.innerText)
    } else if (symbol == '+') {
      result.innerText = splitNumAdd(text.innerText)
    } else if (symbol == 'x') {
      result.innerText = splitNumMul(text.innerText)
    } else if (symbol == '/') {
      result.innerText = splitNumDiv(text.innerText)
    }
    symbol = '+';
    text.innerText = result.innerText + '+';
  }
}

function calcDivide(e) {
  if (!(isNaN(text.innerText))) {
    text.innerText = text.innerText + '/';
    symbol = '/';
  } else {
    if (symbol == '-') {
      result.innerText = splitNumSub(text.innerText)
    } else if (symbol == '+') {
      result.innerText = splitNumAdd(text.innerText)
    } else if (symbol == 'x') {
      result.innerText = splitNumMul(text.innerText)
    } else if (symbol == '/') {
      result.innerText = splitNumDiv(text.innerText)
    }
    text.innerText = result.innerText + '/';
    symbol = '/';
  }
}

function calcMultiply(e) {
  if (!(isNaN(text.innerText))) {
    text.innerText = text.innerText + 'x';
    symbol = 'x';
  } else {
    if (symbol == '-') {
      result.innerText = splitNumSub(text.innerText)
    } else if (symbol == '+') {
      result.innerText = splitNumAdd(text.innerText)
    } else if (symbol == 'x') {
      result.innerText = splitNumMul(text.innerText)
    } else if (symbol == '/') {
      result.innerText = splitNumDiv(text.innerText)
    }
    text.innerText = result.innerText + 'x';
    symbol = 'x';
  }
}

function calcDot(e) {
  if (symbol == null){
    if(text.innerText.length == 0){
      text.innerText = '0.'
    }
    else if (!(text.innerText.split('.').length > 1)){
      text.innerText = text.innerText + '.';
    }
  }else{
    let textsplit = (text.innerText+'.').split(symbol)[1];
    if (!(isNaN(textsplit))){
      text.innerText = text.innerText + '.';
    }else{
      console.log('Not a number');
    }
  }
}

function calcPercent(e) {
  if (!(isNaN(text.innerText))) {
    text.innerText = text.innerText + '%';
  }
}

//Solution
function splitNumAdd(string) {
  let newstring = string.split('+');
  [a, b] = newstring;
  return (Number(a) + Number(b))
}

function splitNumSub(string) {
  string = string.split('-');
  [a, b] = string;
  return (Number(a) - Number(b))
}

function splitNumMul(string) {
  string = string.split('x');
  [a, b] = string;
  return (Number(a) * Number(b))
}

function splitNumDiv(string) {
  string = string.split('/');
  [a, b] = string;
  return (Number(a) / Number(b))
}

//one to ten

function calcOne(e) {
  text.innerText = text.innerText + '1';
}

function calcTwo(e) {
  text.innerText = text.innerText + '2';
}

function calcThree(e) {
  text.innerText = text.innerText + '3';
}

function calcFour(e) {
  text.innerText = text.innerText + '4';
}

function calcFive(e) {
  text.innerText = text.innerText + '5';
}

function calcSix(e) {
  text.innerText = text.innerText + '6';
}

function calcSeven(e) {
  text.innerText = text.innerText + '7';
}

function calcEight(e) {
  text.innerText = text.innerText + '8';
}

function calcNine(e) {
  text.innerText = text.innerText + '9';
}

function calcZero(e) {
  text.innerText = text.innerText + '0';
}
