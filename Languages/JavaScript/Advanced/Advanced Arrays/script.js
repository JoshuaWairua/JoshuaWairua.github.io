
// // creating a higher order function 
// // higher order functions are functions that either return or take up a function as an argument


// // sing is a higher order function because it takes up a function 'callBackFunc as a parameter'
// function sing(callBackFunc) {
//     console.log('la la la la '); 
//     if (callBackFunc) {
//         callBackFunc();
//     } 
// }

// function scare() {
//     console.log('BOO! BOO! BOO!');
// }


// console.log('calling sing with a callback function' , sing(scare));
// console.log('calling sing without a callback function' , sing());


// // multiplier is a higher order function that returns another function
// function multiplier(factor) {
//     // returning a function using arrow syntax
//     return x => x * factor;
// }
// let doubler = multiplier(2);
// let trippler = multiplier(3);
// console.log(doubler(5));
// console.log(trippler(7));



// // FOREACH

// // forEach is a higher order function that helps loop through every item of an array
// // it is better to use forEach in arrays than using for loops
// // unlike the rest of the iterators, forEach does not return a new array 

// let names = ['Dad', 'Mom', 'Joshua', 'Yvonne', 'Elsie', 'Margo', 'Kiboi'];
// names.forEach(function(item, index, array) {
//     if (item === 'Joshua') {
//         item = item.toUpperCase();
//     } else {
//         item = item.toLowerCase();
//     }
//     console.log('index, item, array ===>>>', index, item, array);
// });
// console.log('names array' , names);





// // MAP


// // map is a higher order function that is used on arrays

// let vals = [8, 2, 3, 1, 9];
// console.log('the vals array', vals);

// function doubler2(x) {
//     return x * 2;
// }

// // map takes in another function 'doubler' as a parameter
// // map returns a new array hence you need to create a new array i.e., doubledVals below
// let doubledVals = vals.map(doubler2);
// console.log('the doubledVals array', doubledVals); 

// /*you can also use the arrow syntax below of the above functions
//         let vals = [8, 2, 3, 1, 9];
//         console.log('the vals array', vals);
//         let doubledVals = vals.map(x => x * 2);
//         console.log('the doubledVals array', doubledVals); 
// */


// // REDUCE

// // reduce is a higher order function that can either take one or two arguments (accumulator, currentValue)
// // reduce does some operations on an array and returns a combination of those operations

// let vals2 = [5, 3, 2, 9, .5, 7];
// function sum(acc, val) {
//     console.log(acc);
//     return acc + val;
// }
// let answer = vals2.reduce(sum);
// console.log('reduce without an accumulator', answer);
// // if you do not provide an accumulator value to reduce, by defult it will be the first element in the array, in this case it is 5
// let answer2 = vals2.reduce(sum, 100);
// console.log('reduce with an accumulator of 100', answer2);

// /*
// can also be written in arrow syntax form shown below
//     let vals2 = [5, 3, 2, 9, .5, 7];
//     let answer = vals2.reduce((acc, val) => acc + val);
//     let answer2 = vals2.reduce((acc, val) => acc + val, 100); 
// */

// // another example of the use of reduce to find the largest number in an array
// let vals3 = [3, 7, , 22, 89, 90, 76, .8, 43, 1, 0]

// function findMax(a, b) {
//     if (b > a) {
//         return b;
//     } else {
//         return a;
//     }
// }
// // this reduce function does not have a specified accumulator value, hence it will default to 3
// let largestVal = vals3.reduce(findMax);
// console.log('reduce example 2', largestVal);

// /* 
// using the arrow syntac and the ternary operator to make the code shorter
//     let vals3 = [3, 7, , 22, 89, 90, 76, .8, 43, 1, 0];
//     let largestVal = vals3.reduce((a, b) => b > a ? b: a);
//     console.log(largestVal);
// */

// // example 3 of the use of reduce
// const items =[
//     {name: 'Bike', price: 100},
//     {name: 'TV', price: 200},
//     {name: 'Album', price: 10},
//     {name: 'Book', price: 5},
//     {name: 'Phone', price: 500},
//     {name: 'Computer', price: 1000},
//     {name: 'Keyboard', price: 25}
// ];

// const total = items.reduce((currentTotal, item) => {
//     return item.price + currentTotal
// }, 0);
// console.log('reduce example3', total)






// // FILTER

// // filter is another higher order function used on arrays.
// // when using the callback function on filter, the value that evaluates to true  is the one that remains to be used

// let vals4 = [89, 92, 8, 43, 10, 2, 77, .66, 35, 46];

// function isEven(x) {
//     // returns any even number
//     return x % 2 === 0;
//     /* 
//     the above line can be translated as 
//             if (num % 2 === 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//     */
// }
// let answer3 = vals4.filter(isEven);
// console.log('use of filter to return an array of even numbers', answer3);

// /* 
// in arrow syntax form
//     let vals4 = [89, 92, 8, 43, 10, 2, 77, 35, 46];
//     let answer3 = vals4.filter(x => x % 2 === 0);
//     console.log(answer3);
// */

// // another example of the use of filter to remove undefined elements in an array
// let vals5 = [89, 92, 8, undefined, 10, 2, 77, 35, 46];
//     let answer4 = vals5.filter(y => y !== undefined);
//     console.log('use of filter to return an array that has filtered out undefined elements', answer4);







//HIGHER ORDER FUNCTIONS AND ARRAYS

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 32, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// FOREACH

// get compan name
companies.forEach(function(company, index, companies) {
    console.log('forEach example', company.name);
}) 

// FILTER - does not create a new array

// get ages above 21
const canDrink = ages.filter(age => age >= 21);
console.log('filter example1', canDrink);

// get retail companies
 const retailCompanies =companies.filter(company => company.category === 'Retail');
 console.log('filter example2' , retailCompanies);

//  get eighties companies
 const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
 console.log('filter example3', eightiesCompanies);

// get companies that lasted 10 years or more
 const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
 console.log('filter example4', lastedTenYears);



//MAP - creates a new array

// create array of company names
const companyNames = companies.map(function(company, index, companies) {
    return company.name;
})
console.log('map example1' , companyNames);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log('map example2' , testMap);

//chaining map 
// below the function finds the square root of age and multiplies it by two
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
console.log('map exmple3', ageMap);



//  SORT

// sorting companies by start year
const  sortedCompanies = companies.sort(function(cmpny1, cmpny2) {
    if (cmpny1.start > cmpny2.start) {
        return 1;
    } else {
        return -1;
    }
})
console.log('sort example1' , sortedCompanies);
/*shorter form using arrow functions and ternary operator
    const  sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
    console.log('sort example1' , sortedCompanies);
*/

// sort ages
const sortAges = ages.sort((a, b) => a -b);
console.log('sort example2 ascending order', sortAges)

const sortAges2 = ages.sort((a, b) => b- a);
console.log('sort example2 descending order', sortAges2)




// REDUCE

// get total age
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log('reduce example1', ageSum);

// get total years for all companies
 const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log('reduce example2', totalYears)



// combine methods

const combined = ages
    .map(age => age*2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b);
console.log('combined methods', combined)