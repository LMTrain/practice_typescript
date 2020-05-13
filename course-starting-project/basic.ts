function merge(n1: number, n2: number, showResult: boolean, phrase: string) {
    
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {

        return result;
    }
}

const number1 = 25;
const number2 = 25.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = merge(number1, number2, printResult, resultPhrase);
