let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('my name is Josh');
    }, 3000);
  })
};

async function asyncFuncExample(){
  try{
    let resolvedValue = await myPromise();
    console.log(resolvedValue);  
  }
  catch(err) {
    console.log(err);
  }
};

asyncFuncExample();

/*

######################################################## REDUCE function ###########################################################################

*/

//the callback function of the reduce method is generally referred to as the reducer
//reduce is a powerful method used to reduce problems to simpler forms

//example 1: getting an average of ages
let array1 = [
  { "name": 'Josh', "age": 25, "gender": 'male' },
  { "name": 'Yvonne', "age": 25, "gender": 'female' },
  { "name": 'Macharia', "age": 28, "gender": 'male' },
  { "name": 'Beno', "age": 26, "gender": 'male' },
  { "name": 'Brian', "age": 27, "gender": 'male' },
];

const accumulator = 0;
let totalAges = array1.reduce((accumulator, elementInArray) => {
  return accumulator += elementInArray["age"];
}, 0) / array1.length

console.log(totalAges);

//using recuce to return a single object
let friendsAges = array1.reduce((finalObj, elementInArray) => {
  console.log(finalObj);
  finalObj[elementInArray["name"]] = elementInArray["age"];
  return finalObj;
}, {});

let friendsGender = array1.reduce((finalObj, elementInArray) => {
  finalObj[elementInArray["name"]] = elementInArray["gender"];
  return finalObj;
}, {});

console.log(friendsGender);


/*
Complete the code for the squareList function using any combination of map(), filter(), and reduce(). 
The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers),
when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.
*/

const squareList = arr => {
  let arraySqrd = arr
                .filter(elem => elem >= 0 && Number.isInteger(elem))
                .map(elem => elem ** 2);
  return arraySqrd;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


/*

########################################################## SORT method ####################################################################################

*/

//the callback function of the sort method is commonly referred to as the compareFunction
//the sort method mutates the original array. So, it is recommended to copy the array that is being sorted, unless you want to mutate the original array

function alphabeticalOrder(arr) {
  return arr.sort((a, b) => {
    if(a == b) {
      return 0;  //if the first element and the second element are equal, then the compareFunction should return 0. Hence the 2 elements being compared will not be sorted
    } else if(a < b) {
      return -1;  //if the first element is smaller than the second element, then the compareFunction should return any negative integer (-1 in this case). Hence the first element will come before the second element
    } else {
      return 1;   //if the first element is larger than the second element, then the compareFunction should return a positive integer (1 in this case). Hence the first element will come before the second element
    }
  })
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//using the ternary operator
function alphaOrderTernary(arr) {
  return arr.sort((a, b) => {
       return a === b ? 0 
       : a < b ? -1 
       : 1;
  })
}

console.log('alphaOrderTernary', alphaOrderTernary(["a", "d", "c", "a", "z", "g"]));

//reverse sorting

let reverseAlphabet = function (arr) {
  return arr.sort((a, b) => {
    return a === b ? 0 : a < b ? 1 : -1;
  })
}

console.log('reverseSorting: ', reverseAlphabet(["a", "d", "c", "a", "z", "g"]))