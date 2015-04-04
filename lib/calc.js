module.exports = function calc( num1, operator, num2 ) {

  var number1 = Number( num1 );
  var number2 = Number( num2 );
  var op = operator;
  var result;

  if (  op === '+' ) {

    result = number1 + number2;

  }

  if ( op === '-' ) {

    result = number1 - number2;

  }

  if ( op === '*' ) {

    result = number1 * number2;

  }

  if ( op === '/' ) {

    result = number1 / number2;

  }

  console.log( '\n' + result + '\n' );

}