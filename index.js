// My First JS......
let date = Date();
// alert(date);
console.log(" Today's date is " + date);

// Javascript changing values.......
let id = "Javascript";
function myFunction(id){
    return  "my first javascript";
}
myFunction(id);
console.log(myFunction(id));

// linked from HTML
function linked(id){
   document.getElementById('demo2').innerHTML = "Second Paragraph";
}

// JS Statements
let x, y, z;
x = 5;
y = 6;
z = x + y;
    document.getElementById('demo3').innerHTML = "The value of z is " + z + "."
    // checking via console
    console.log(z);

    // JS code blocks {}
function displayGreetings(){
    document.getElementById('hello').innerHTML = "Hello Dolly!";

    document.getElementById('dolly').innerHTML = "How are you?";
}
// console.log(displayGreetings());

// multi statements on one line
let a, b, c;
a = 10, b = 15, c = b - a;
console.log( c );

// JS operators
const v = (3 + 3) * 10;
console.log(v);

// JS Expressions
let firstName = 'Issabel';
let lastName = 'Jacinta';
console.log(firstName + " " + lastName);

//JS dif keywords & Variables....
const price1 = 7;
let price2 = 4;
var total = price1 + price2;
console.log("The total is " + total );
//strings are written in single or double quotes but number is written without......
 const pi = 3.14;
 let person = "John Wick";
 let answer = "Yes please!"
 console.log(pi  +  "\n" + person + "\n"  + answer);

 //Redeclaring JS Variables....
 var carName = "Benz";
 var carName;           //this is allowed cus it is "var" keyword

let carModel = "Lexus";
{let carModel = "toyota"  }          //this is not allowed with "let or const" keyword unless if written in block

 //JS Arithmetic......(numbers)
let m = 5 + 5 + 3;
function numbers(){
    return (m);
}
console.log(numbers());
//JS Arithmetic.......(strings) [concatenation]
const $person = "Issa" + " " + "Astral";
function Strings(){
    return ($person);
}
console.log(Strings());

//strings & numbers..... if a first number is written in quote, the rest of the numbers will be displayed as strings but if it is the last number.....,the rest will be summed up except the last..
let $n = "7" + 1 + 2;
console.log($n);

let $$n = 7 + 1 + "2";
console.log($$n);

let $$$n = 'Man' + 2 + 4 + 7;
console.log($$$n);

let N$ = 2 + 4 + 7 + 'Woman'
console.log(N$);

//Hoisting.....
//with "var" keyword, variables can be hoisted on the top before declaring/initializing at anytime but will display error with "let $ const" keyword....
$houseName = "Bungalow";
var $houseName = "Duplex";
console.log($houseName);             //var

$$houseName = "Bungalow";
{let $$houseName = "Duplex;" }         //let.....error
// console.log($$houseName)   

//Constant Objects and Arrays.....
/* const CANNOT reassign constant value, array & object but CAN change elements of const array and properties of const object*/

//create a constant array: changing element: add element: display array:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push ("Audi");
console.log(cars);

//CANNOT reassign the array
const $cars = ["Saab", "Volvo", "BMW"];
// $cars = ["Toyota", "Volvo", "Audi"];            //error
console.log($cars);

//Constant Objects: change property: add property: display prop.:
const car = {type: "Fiat", model:"500", color:"white"};
car.color = "red";
car.owner = 'Johnson';
function _car(){
    return (car);
}
console.log( _car());

//CANNOT reassign object:
const $car = {type: "Fiat", model: "500", color: "white"}
// $car = {type: ";Volvo", model:"EX60", color:"red"};       //error
console.log($car)

//JS Operstors......Assignment/Adding/Multiplying/Sub......
let _x = 100;
console.log(_x);

let _a = 20;
_b = 10;                        //JS Assignment Operators: 
_c = _a + _b;                       // _a += 10
console.log(_c);

let __a = 5;
__b = 0;
__c = __a * __b;                    // __a *= 0
console.log(__c);

let _$ = (10 - 11);                 // _$ -= 11
console.log(_$);

//Exponentiation
let __$ = 3;
let _$_ = 4;
let $__ = __$ ** _$_;               // __$ **= 4
console.log($__)

//Division
let $$_ = (10 / 5);                  // $$ /= 5
console.log($$_);

//Modulus
let mod = (11 % 3);                 // mod &= 3
console.log(mod)

//increment & decrement
let inc = 7;
 _inc =  ++inc;
console.log(_inc);

let dec = 10;
_dec = --dec;
console.log(_dec);    

//JS Typeof.....
let _34 = "John";
console.log  ("The type is " + typeof _34);

//JS Booleans.... (true or false)
var $true = "true";
let _true = "true";
const $_true = "false";
console.log($true == _true);

// JS Function....
function element(a1, a2){
    return (a1 * a2);
}
console.log(element(5, 5));

function ToCelsius(F){
    return (5/9) * (F-32);
}
// call to convert fron fahrenheit to celsius
console.log(ToCelsius(77));

//Invoking without () will return back function definition instead of the result

function ToCelsius(F){
    return (5/9) * (F-32);
}
console.log(ToCelsius);

//Function as variable values....
let xx ="The Temperature is " + ToFahrenheit(30) + " Fahrenheit";
function ToFahrenheit(C){
    return (5/9), (C-54);
}
console.log(xx)

//Local Functions.... any var declared within JS Function becomes LOCAL to the func.
function local(){
    let carName = "Mercedes";
}
console.log(typeof carName);

//JS HTML Events.....
function displayDate(){
    document.getElementById('demo4').innerHTML = Date();
}
// console.log(displayDate());

//JS STrings.....
let $x = "Peter";
let $y = new String("Peter");
console.log(typeof $x + " & " + typeof $y);
console.log( $x==$y); //equal
console.log( $x===$y); //compare

//JS String Lenght....
let txt = "qwerty";
console.log(txt.length);

//JS String Methods.....this extracts a part of a string and returns the extracted part in a new string (str.slice)
let str = "Apple, Mango, Banana";
console.log(str.slice(7, 12))               //positive. value counts from left to right
//omitting the second parameter will make the method slice out rest of the string....
let $str = "Apple, Mango, Banana";
console.log(str.slice(-20, -15))             //neg. value counts from right to left

//substring is same as above..but if the start or end value is less than 0..,it will be treated as 0. (str.substring)

//substr.... the second parameter of this specifies the length of extracted part... (str.substr)
let $$str = "Apple, Mango, Banana";
console.log(str.substr(14, 6))

//Replacing String method...

function replace(){
    let $text = document.getElementById("demo5").innerHTML;
    document.getElementById("demo5").innerHTML = $text.replace("Microsoft", "W3School");
}
//Converting tp Upper and LowerCase()
let upper1 = "Silencia";
upper2 = upper1.toUpperCase();
console.log(upper2);

let lower1 = "Valentine";
function lowerCase(){
    return lower2 = (lower1.toLowerCase());
}
lowerCase();
console.log(lower2);
//JS String Trim() this removes the whites space in the string....
let $$_$$ = "        Fantasy     ";
let $$$_$ = $$_$$.trim();
console.log($$_$$.length)
console.log($$$_$.length)
//JS TrimStart.....this trims only from the start...
let $_$$ = "        Fantasy     ";
let $$_$ = $$_$$.trimStart();
console.log($_$$.length);
console.log($$_$.length);
//JS trimEnd does opposite as trimStart....

//JS String Padding.... before padding a number, first convert it to a string .toString()
//padStart.....
let numb = 5;
let _text = numb.toString();
let padded = _text.padStart(3, "0");
console.log(padded);
//padEnd......
let _numb = 3;
let __text = _numb.toString();
let _padded = _text.padEnd(4, "x");
console.log(_padded);

//JS String split()
let split = "a,b,c,d,e,f";
const myArray = split.split(","); 
console.log(myArray[0]);

//JS Search methods......indexOf() & lastIndex..
let _str = "Let us know where 'locate' can be found";
console.log(_str.indexOf("locate"));

let $_str =  "Let us know where 'locate' can us be found";
console.log($_str.lastIndexOf("us"));
//both indexOf() and lastIndexOf() return-1 if the text is not found:
let _$str = "Let us know where 'locate' can be found";
console.log(_$str.indexOf("come"));
//both methods accept a second parameter as the starting position for the search..

//JS String Search....
let search = "Let us know where 'locate' can be found";
console.log(search.search('where'));

//JS String match()....
let match = "The rain in SPAIN stays mainly in the plain"
console.log(match.match(/ain/g));
//without the g modifier (to perform global search), the match() method will return only the first match in the string......

//performing a global, case-insensitive search for "ain"...
let $match = "The rain in SPAIN stays mainly in the plain";
console.log($match.match(/ain/gi));

//JS String includes()....
let incl = "Hello world, welcome to the universe.";
console.log(incl.includes("world"));  //when you include a number after the string "world".. the search position starts fron that number...

//JS String starts and endsWith....
let start = "Hello world, weolcome to universe";
console.log(start.startsWith('Hello'));

//endsWith....
let ends = "Hello world, weolcome to universe";
console.log(start.endsWith('Hello'));
//the start and end position with number added after 'Hello' will either choose the string starting "startsWith()" from that number or ending "endsWith()" with the number respectively...

//JS Template Literals...
//back-tics syntax (``) can be used to define a string rather than ("")
let $backtics = `Hello World`;
console.log($backtics);
//with this, you can use single or double quotes inside a string..

//Interpolation   ${..}
let me = `I'm me`;
you = `you're you`;
me_you = `${me},\n${you}`;
console.log(me_you);
//Automatic replacing of variables with real values is called String Interpolation

//Expression Substitution...
let _price = 10;
let VAT = 0.25;
let TOTAL = `Total is: ${(_price * (1 + VAT)).toFixed(2)}`;
console.log(TOTAL);
//Automatic replacing of expressions with real values is called String Interpolation

//HTML Templates..
let header = "Template Literals";
tags = ["template literals", "javascript", "es6"];

let html = `<h4>${header}<h4><ul>`;
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo6").innerHTML = html;
console.log(html);

//JS Numbers...
//js has only one type of no. nos can be written with or without decimals.
/* let x = 3.14;        with deci
y = 3;                 without deci     */

//Xtra large/small nos can be written with scientific (exponent) notation..
let m_e = 123e5;
let n_e = 123e-5;
console.log(`${m_e}\n${n_e}`);

//Integer Precision.. integers (nos without a period ot expo not) are accurate up to 15 digits...
let $int = 999999999999999;
let _int = 9999999999999999;
console.log(`${$int}\n${_int}`);        //The maximum no of decimal is 17

//Floating Precision... floating point arithmetic is not always 100% accurate..
let $float = 0.2 + 0.1;
console.log($float);        //0.30000000000000004
//To solve the problem above, it helps to multiply and divide...
let _float = (0.2 * 10 + 0.1 * 10) / 10;
console.log(_float);

//Infinity..
let myNumber = 2;
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}
console.log(myNumber);

//Hexadecimal.. JS interprets numeric const as hexdec if they are preceded by 0x
let hex = 0xFF;
console.log(hex)
 
//JS Number Methods
//toString() method
let toS = 123;
console.log(`${toS.toString()}\n${(123).toString()}\n${(100 + 23).toString()}`);
//toExponential() method
let exp = 9.656;
console.log(`${exp.toExponential()}\n${exp.toExponential(2)}\n${exp.toExponential(4)}\n${exp.toExponential(6)}\n`);
//toFixed() method
let fix = 6.767;
console.log(`${fix.toFixed()}\n${fix.toFixed(2)}\n${fix.toFixed(4)}\n${fix.toFixed(6)}\n`);
//toPrecision() method...
let pre = 3.339;
console.log(`${pre.toPrecision()}\n${pre.toPrecision(1)}\n${pre.toPrecision(2)}\n${pre.toPrecision(5)}\n${pre.toPrecision(7)}\n`);

//Converting Variables to Numbers....
//The Number method
console.log(Number(true), Number(false), Number("10"), Number("1    0"),  Number("10.33"), Number("John")
);
//No() method used on Dates... Number() converts date to a no
console.log(Number(new Date("1970-01-01")));
console.log(Number(new Date("1970-01-02")));
console.log(Number(new Date("2022-09-27")));
//The Number() method returns the number of milliseconds since 1970...

//parseInt() method..parse a string and returns a whole number. spaces are allowed. Only the first number is returned.
console.log(parseInt("-10"), parseInt("-10.33"), parseInt("10"), parseInt("10 6"), parseInt("10 miles"), parseInt("miles 10")
);              //if the number cannot be converted, NaN(Not a NUmber) is returned

//JS MIN_VALUE and MAX_VALUE...
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//JS Arrays...Creating an Array
const $array = ["duplex", "bungalow", "cuttage"];
console.log(`${$array}`);
//Accessing Array Elements..
const access = ["Benz", "Volvo", "Toyota"];
let $access = access[0];
console.log(`${$access}`)
//Changing an Array Elemnt...
const change = ["Benz", "Volvo", "Toyota"];
 change[2] = "Volkwagen";
console.log(change);
//Array Properties and methods..
//lenth property return the length of an array(the number of array element)
const fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruit = fruits.length;
console.log(`${fruit}`);

//Looping Array Elements.. one way to loop through an array, is using (for)) loop
const phones = ["Iphone", "Samsung", "Nokia", "Tecno"];
let fone = phones.length;

let _$text = "<ul>";
for (let i = 0; i < fone; i++) {
    _$text += "<li>" + phones[i] + "</li>";
};
_$text += "</ul>";
console.log(`${_$text}`);
//alternatively, you can also use the ( Array.forEach()) function
const fones = ["Iphone", "Samsung", "Nokia", "Tecno"];

let list = "<ul>";
fones.forEach(myStyle);
list += "</ul>"

function myStyle(lists) {
    list += "<li>" + lists + "</li>";
}
console.log(`${list}`)
//How to Recognize an Array... when you use (typeof) it will return "object". below is the solution.
const watches = ["Hublot", "Kobs", "Police"];
console.log(Array.isArray(watches)) ;  //Array.isArray()

const wristw = ["chain", "leather", "rubber"];
console.log(wristw instanceof Array);

//Converting arrays to Strings using toString() and join()...
const $fruits = ["Banana", "Apple", "Mango"];
console.log($fruits.toString())

const _fruits = ["Banana", "Apple", "Mango"];
console.log(`${_fruits.join(" / ")}`)  ;        //you can specify the separator using join()

//JS Popping pop() and Pushing push()
const $$fruits = ["Banana", "Apple", "Mango", "Orange"];
console.log($$fruits.pop());  //the popped out array
console.log($$fruits);

const __fruits = ["Banana", "Apple", "Mango", "Orange"];
console.log(__fruits.push("Coconut"))  //returns the new array length
console.log(__fruits);

//JS Array shift()... shift removes from the beginning while pop() removes from end..
//unshift() adds from the beginning unlike push() that adds from the end...
//JS Array delete()
const del = ["Banana", "Apple", "Mango", "Orange"];
delete del[0];
console.log(del);
console.log(del[0]);

//Merging (Concatenating) Arrays... Two arrays
const myBoys = ["Mike", "John", "Val"];
myGirls = ["Peace", "Daisy", "Jane"];
myKids = myBoys.concat(myGirls);
console.log(myKids);
//three Arrays..
const array1 = ["Mike", "John", "Val"];
array2 = ["Peace", "Daisy", "Jane"];
array3 = ["Loki", "Gideon"];
const all = array1.concat(array2, array3);
console.log(all);
//you can also use concat() to merge an array with values...concat("Gideon")

//Splicing splice() and Slicing slice() Arrays...
//JS Array splice() can be used to add new items to an array
const splice = ["Apple", "Banana", "Mango", "Orange"];
splice.splice(3, 0, "Lemon", "Kiwi"); // 3 is position where to add item, 0 defines how many items to be removed.
console.log(splice);
//splice() can also be used to removed Elements by using parameter like splice(0, 1);

//JS Array slice()... this slices out a piece of an array..before the given parameter 
const slice = ["Apple", "Banana", "Mango", "Orange"];
citrus = slice.slice(1);
console.log(citrus);

const $slice = ["Apple", "Banana", "Mango", "Orange"];
citrus = slice.slice(1, 3);
console.log(citrus);
//this selects the elements fron the start argument and to the last argument not including the last element..

//JS Sort...sort() method sorts an aray alpahabetically..
const $_fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log($_fruits.sort());
console.log($_fruits.reverse()); //reverse() method...
//Numeric Sort..... ascending..
const points = [40, 100, 5, 1, 10, 0];
console.log(points.sort(function(a, b){return a - b}));
//Descending...
console.log(points.sort(function(a, b){return b - a}));
//Random Order...
points.sort(function(){return 0.5 - Math.random()});
console.log(points);
//Finding the lowest or highest Array Value.
points.sort(function(a, b){return a-b});
console.log(points[0]);
//Highest value..
points.sort(function(a, b){return b-a});
console.log(points[0]);
//Sorting Object Arrays...
const carType = [{type:"Volvo", year:2016},
 {type:"Saab", year:2001},
 {type:"BMW", year:2010}];

 carType.sort(function(a, b){return a.year - b.year});
 console.log(carType);
 
 //JS Array Iteration.... Array forEach()
 const _numbers = [45, 4, 9, 16, 25];

 let tXt = "";
 _numbers.forEach(eachFunction);

 function eachFunction(value, index, array){        //this example uses only value parameter..
 tXt += value + "\n";
}
 console.log(`${tXt}`);
 //JS Array.map()....Creates a new array by performing a func on each array element
 const numbers1 = [45, 4, 9, 16, 25];
 const numbers2 = numbers1.map(mapFunction);

function mapFunction(value, index, array){
    return value * 2;
}
console.log(numbers2);
//JS Array.filter()...Creates a new array with all array elements that passes a test
const $numbers = [45, 4, 9, 16, 25];
const over18 = $numbers.filter(filterFunc);

function filterFunc(value, index, array) {
    return value > 18;
}
console.log(over18);
//JS Array.reduce()...this example finds the sum of all numbers in an array
const $reduce = [45, 4, 9, 16, 25];
const redSum = $reduce.reduce(reduceFunc, 100); //it can accept initial value (100)

function reduceFunc(total, value, index, array){
    return total + value;
}
console.log(`${redSum}`);
//JS Array.every()...this example checks if all array values are larger than 18
const $every = [45, 4, 9, 16, 25];
let allOver = $every.every(eveFunction);

function eveFunction(value, index, array){
    return value > 18
}
console.log(allOver);
//JS Array.some()...this example checks if some array values pass a test..
const $some = [45, 4, 9, 16, 25];
let allSome = $some.some(someFunction);

function someFunction(value, index, array){
    return value > 18
}
console.log(allSome);
//JS Array.indexOf()..this searches an array for an element value and return its position.
const index = ['a', 'b', 'c', 'd'];
let position = index.indexOf('a') + 1;

console.log(position)
//Array.lastIndexOf() of is same with above but it returns the position of the last occurence of specified element..
//JS Array.find().returns the FIRST array element that passes the test...
const $find = [4, 9, 16, 25, 45];
let _find = $find.find(findFunction);

function findFunction(value, index, array){
    return value > 18
}
console.log(_find);
//JS Array findIndex()..
const $findIndex = [4, 9, 16, 25, 45];
let _findInd = $findIndex.findIndex(findIndexFunc);

function findIndexFunc(value, index, array){
    return value > 18
}
console.log(_findInd);
//JS Array keys()..
const foods = ["rice", "beans", "potato", "yam"];
const keys = foods.keys();

let $$text = "";
for (let x of keys){
    $$text += x + "\n";
}
console.log($$text);
//JS Array entries()...entries return an array object with key/value pairs
const $foods = ["rice", "beans", "potato", "yam"];
const ent = $foods.entries();

let _$$text = "";
for (let x of ent){
    _$$text += x + "\n";
}
console.log(_$$text);
//JS Array include()..this allows to check if an element is present in an array
const $_foods = ["rice", "beans", "potato", "yam"];
const _$inc = $_foods.includes("potato");
console.log(_$inc);

//JS Date Objects...
const d = Date();
    console.log(d);
    console.log(new Date());
    //new Date(year, month, day...)
    const $d = new Date(95, 07, 28, 13, 30, 30, 0);
    console.log($d);
    //new Date string
    console.log(`${new Date("Oct 05, 2022 14:30:04")}`) 
    //new Date(milliseconds)
    console.log(`${new Date(0)}`) //this gives date of previous century 
    console.log(new Date(1664924400000)) //milliseconds of the date below
    console.log(Number(new Date(2022, 09, 05))) //date for the milliseconds above..
    //JS ISO Date
    console.log(`${new Date("2010-10-10")}`);
    //Date Input - Parsing Dates....this converts  valid date string to millisecs
    let msec = Date.parse("Aug 28, 1995");
    const dd = new Date(msec);
    console.log(dd);
    console.log(msec);
    //JS Get Date Methods..
    const year = new Date();
    console.log(`${year.getFullYear()}`);
    console.log(`${year.getMonth()}`);
    //you can use an array of names, and getMonth() to return the month as a name...
    const month = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let mnth = months[month.getMonth()];
    console.log(mnth);
    //JS Set Date Methods...this lets you det date values(years,months,days,hours,.....)for a Date Object.
    const set = new Date();
    console.log(`${set.setFullYear(2010, 10, 10)}`)
    console.log(new Date(1289408215058));
    //Compare dates
    let __$text;
    const today = new Date();
    const someday = new Date();
    someday.setFullYear(2024, 2, 20);

    if (someday > today){
        __$text = "Today is before Jan 14, 2024.";
    }else{
        __$text = "Today is after Jan 14, 2024.";
    }
    console.log(__$text);
    //JS Math Object..this allows you to perform mathematical tasks on mumbers..
    console.log(Math.PI);
    //Math.round(..) returns the nearest integer.
    console.log(`${Math.round(4.5)}`);
    console.log(`${Math.round(4.4)}`);
    //Math.ceil(..) returns the value (..) rounded up to its nearest integer
    console.log(`${Math.ceil(4.4)}`);
    //Math.florr(..) returns the value of (..) rounded down to its nearest integer
     console.log(`${Math.floor(4.4)}`);
     //Math.pow()
     console.log(Math.pow(6, 2));
     /*Math.sqrt() returns the square root of x 
     Math.abs() returns the absolute (positive) value 
     Math.min() and Math.max() can be used to find the lowest and lowest value in a list of argument
     Math.random() returns a random number between 0 (inclusive), and 1 (exclusive) */ 

     console.log(`${Math.sin(90 * Math.PI / 180)}`);
     console.log(`${Math.cos(0 * Math.PI / 180)}`);
     //JS Random.... this always returns a number lower than 1
     console.log(Math.floor(Math.random() * 10));
     //A Proper Random Function...
     //this js function always returns a random number btw min(included) and max( excluded)
     function getRdInt(max, min){
        return Math.floor(Math.random() * (max - min)) + min;
     }  
     console.log(getRdInt(0, 10));  //returns a random number from 0 t0 9

     //this js function always returns a random number btw min and max(both included)
     function getRdInt(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min;
     }  
     console.log(getRdInt(1, 10));

     //JS Booleans... this only takes a value true or false
     console.log(`${Boolean(3 < 7)}`);
     let Boo = "lean";
     console.log(`${Boolean(Boo)}`);
     //JS Comparison and Logical Operators......
     function myComparison(){
        let age = Number(document.getElementById("age").value);
        if (isNaN(age)){
            voteable = "Input is not a number"
        }else{
            voteable = (age < 18) ? "Too young":"Old enough";
        }
        document.getElementById("dem").innerHTML = voteable + " to vote.";
        
     }
     myComparison();

//JS if, else, and else if...
if (new Date().getHours() < 18){
    document.getElementById("if").innerHTML = "Good Day";
};
//else
const hour = new Date().getHours();
let greet;
if (hour < 18){
greet = "Good Day"
}else{
    greet ="Good Evening" 
}
document.getElementById("else").innerHTML = "Good Day";
console.log(greet);
//else if
const time = new Date().getHours();
let greeting;

if (time < 10){
    greeting = "Good Morning";
}else if (time < 20){
    greeting = "Good Day";
}else{
    greeting = "Good Evening";
}
document.getElementById("else if").innerHTML = greeting;
console.log(greeting);

//JS Switch Statement...
let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break; 
    case 6:
        day = "Saturday";
        break;  
}
console.log (`${ "Today is " + day}`)
//The default Keyword...
let $_$text;
switch(new Date().getDay()){
    case 6:
        $_$text = "it's Saturday";
        break;
        case 5:
        $_$text = "it's Friday";
        break;
        default:
            $_$text = "It's Matchday"
}
console.log(`${$_$text}`)
//Common Code Blocks
let dayTime;
switch(new Date().getHours()){
    case 7:
    case 8:
        dayTime = "Morning";
        break;
    case 18:
    case 20:
        dayTime = "Night";
        break;
        default:
            dayTime = "Afternoon";
}
console.log(`${dayTime}`);
//Strict Comparison...
let _me = "Man";
let write;
switch(_me){
    case 0:
        write = "100";
        break;
        case 1:
            write = "Male";
            break;
            default:
                write = "No value found";
}
 console.log(`${write}`);
// //JS For Loop.. loops through a block of code a number of times
 const _cars = ["BMW", "Audi", "Benz", "Volvo", "Toyota"];

 let loop =  "";
 for (let i = 0; i < _cars.length; i++){
    loop += _cars[i] + ("\n");
}
 console.log(`${_cars}`);

 let $for = "";
 for (let i = 4; i < 8; i++){
    $for += [i] + ("\n");
 }
 console.log(`${$for}`);

// //for in loops through the properties of an object
 const issa = {fName: "Dera", lName: "Jace", age: "22"};

 let Issa = ""
 for(let i in issa){
     Issa += issa[i] + " ";
 }
 console.log(`${Issa}`)
// // And also on arrays
 const nums = [12, 13, 14, 15, 16];

 let numz = "";
 for (let x in nums){
     numz += nums[x] + " ";
 }
 console.log(`${numz}`);

// //if the index order is important,, use Array.forEach()
 const noms = [1, 2, 3, 4, 5];

 let nomz = "";
 noms.forEach(sarr);

 function sarr(value, index, array){
     nomz += value + " ";
 }
 console.log(`${nomz}`);
// // For of loop..this loops through the values of an iterbale object (arrays, strings, maps, ....)
 const $of = ["camry", "mitsh", "wagon"];

 let $$ = "";
 for (let i of $of){
     $$ += i + ("\n")
 }
 console.log(`${$$}`);
// //looping over a string
 const _$js = "Javascript";

 let loopFor = "";
 for (let x of _$js){
     loopFor += x + ("\n");
 }
 console.log(loopFor);

 // while loop....
 let _while = "";
 let i = 4;
 while(i < 8){
     _while += i  + " "; i++;
 }
 console.log(`${_while}`);
// //do while loop..
//  let $$while = "";
//  let _$x = 0;

//  do{
//      $$while += i + " "; i++;
//  }
//  while(_$x < 6);
//  console.log(`${$$while}`);

//JS Break and Continue
let brk = "";
for (i = 0; i < 10; i++){
    if(i === 2){break;}
    brk += i + " ";
}
console.log(`${brk}`);
//continue breaks one particular iteration and continue with the next..
let cont = "";
for (i = 1; i < 5; i++){
    if(i === 3){continue;}
    cont += i + " ";
}
console.log(`${cont}`);
//JS Labels.....(break labelName;  continue labelName;)
const kars = ["BMW", "Ford", "Benz", "Toyota"];
let texxt = "";
list: {
    texxt += kars[0] + " ";
     texxt += kars[1];
     break list;
      texxt += kars[2];
       texxt += kars[3];
}
console.log(texxt);

//JS Sets...a collection of unique values
const alphas = new Set(["j", "b", "l"]);
console.log(`${alphas.size}`)
//create set and add values
const jbl = new Set();

jbl.add("c");
jbl.add("a");
jbl.add("s");
jbl.add("e");
console.log(`${jbl}`)
console.log(`${jbl.size}`)
//forEach can also be used in set to call each elements...

//JS Maps.... a map holds  key-value pairs where the keys can be any datatype.
const books = new Map([
    ["science" , 500],
     ["art" , 400],
      ["geo" , 300]
]);
console.log(`${books.get("art")}`);
console.log(books.entries());        //check the latter entries
console.log(books.size);
console.log(books.has("geo"));
console.log(books.delete("geo"));
console.log(books.has("geo"));
//forEach() method
const buks = new Map([
    ["science" , 500],
     ["art" , 400],
      ["geo" , 300]
]);
let $list = "";
buks.forEach(function(key, value){
    $list += value + ' = '  + key + " ";
})
console.log($list);
//entries() method
const laptops = new Map([
    ["Lenovo" , 300],
    ["Hp" , 400],
    ["Samsung" , 500],
    ["Dell" , 600],
])
let $all = "";
for (const i of laptops.entries()){
    $all += i + " ";
}
console.log(`${$all}`);

//JS Errors..."try" statement defines a code block to run(to try). "catch" statement defines a code block to handle any error. "finally" statement defines a code  block to run regardless of the result. "throw" statement defines a custom error.
try {
    annlert("Hello World");
}
catch(err) {
    err.message
}
// console.log(`${annlert}`)  //undefined

// function tryCatch(){
// const feedback = document.getElementById("ps2");
// feedback.innerHTML = "";
// let i = document.getElementById("kash").value;
// try {
//     if(i == "") throw "empty";
//     if(isNaN(i)) throw "not a number";
//     // i = Number(i);
//     if(i < 5) throw "too low";
//     if(i > 10) throw "too high";
// }
// catch(err){
// feedback.innerHTML = "Input is " + err;
// }
//  finally{
//     document.getElementById("kash").value;
//}
// }
// tryCatch()
