// Problem 1
// I went to the supermarket to buy some oranges and apples. Calculating how much money the shopkeper will return me
// step 1. The money I have
// step 2. The value of each items.
// step 3. total cost
// step 4. The return.

var monye = 1200;
var orange = 450;
var apple = 320;
var total = orange + apple;
var Return = monye - total;
console.log(total);
console.log(Return);


// Problem 2
// I have some numbers  of my final exam. I have to do the avarage of these marks.
// step 1. making var of each subjects
// step 2. adding all the value in a var
// step 3. dividing the values by the number of subjects.
// step 4. making a var of the value
// step 5. showing the output.

var Mathematics = 67;
var Biology = 63;
var Chemistry = 55;
var Physics = 63;
var Bangla = 68;

var Total = Mathematics + Biology + Chemistry + Physics + Bangla;
console.log(Total);
var Average = Total / 5;
console.log(Average.toFixed(2));

//problem 3
//I have a number to divide by 5 and show the remainder as the output.
// step 1. storing the number in a var
// step 2. moduling the number by 5
// step 3. showing the number

var firstNum = 12;
var shesh = firstNum % 5;
console.log(shesh);

console.log(12/5);

const f = isNaN('502');
console.log(f);
const g =  isNaN(2-10);
console.log(g);