type Combinable = number | string; //union type
type ConversionDescriptor = 'as-number' | 'as-text';

function merge(
   input1: Combinable, 
   input2: Combinable,
   resultConversion: ConversionDescriptor
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
