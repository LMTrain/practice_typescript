function merge(input1, input2, //union type
resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = merge(30, 36, 'as-number');
console.log(combinedAges);
var combinedStringAges = merge('30', '36', 'as-number');
console.log(combinedStringAges);
var combinedNames = merge('Laycon ', 'Muriziq', 'as-text');
console.log(combinedNames);
