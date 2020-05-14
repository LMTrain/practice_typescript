function merge(
    input1: number | string, 
    input2: number | string,  //union type
    resultConversion: 'as-number' | 'as-text'
)   {
    
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }    
    return result;


    
}

const combinedAges = merge(30,36, 'as-number');
console.log(combinedAges);

const combinedStringAges = merge('30','36', 'as-number');
console.log(combinedStringAges);

const combinedNames = merge('Laycon ', 'Muriziq', 'as-text');
console.log(combinedNames);
