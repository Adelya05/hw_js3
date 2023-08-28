// задание 1


let massive = [1, 3, 5, 8];
let massive2= [1, 3, 5, 8];

function equal(x, y) {
  return x.length === y.length &&
         x.every((element, index) => y[index] === element);
}

console.log(equal(massive, massive2));


// 2
function pow(number , degree){
    return  Math.pow(number , degree)
}
const result = pow(2,3);
console.log(result);


//3
var x = "hello world"
var empty = " "
console.log( "hello world " + x.length  );



// доп дз


const array = [1, 1, 1, 2, 3, 5, 5, 7, 8, 3];
const uniqueSortedArray = Array.from(new Set(array)).sort((a, b) => a - b);

console.log(uniqueSortedArray);


// доп 2

const sms = (phone,text) => {
    alert(phone, text)
}

sms(+996777098977, "Аделя");













