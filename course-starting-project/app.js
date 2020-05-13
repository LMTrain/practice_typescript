function merge(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 25;
var number2 = 25.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = merge(number1, number2, printResult, resultPhrase);
