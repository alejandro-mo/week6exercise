

// 5. var testOne = "What kind of variable am I"; // String
// var testTwo = 256; // Number
// var testThree = false; // Boolean
// var testFour = 'true'; // String
// // console.log(testFour);
// var testFive = '128'; // String
// // console.log(testFive);
// var testSix = ""; // empty string/could also be a empty space
// // console.log(testSix);

/*
6. var testOne = "hello" + "there";// two strings that are concatenating to become hellothere but I could have put "hello " and make it hello there
// console.log(testOne);
var testTwo = '100' + 28; // 100 is a string and 28 is just a number but if you add them together they become '10028' and will keep doing it if you add numbers to a string, 
// console.log(testTwo);
var testThree = true + 3; // we have a boolean and a number and so it becomes 4 because true converts to 1 and false converts 0 so in this its pretty much 1 + 3 which returns 4.
// console.log(testThree);
var testFour = 'false' + 5; // we have a string plus a number which converts to false5 because false in a string is still a string and adding a number to string converts the number to a string and adds it to the end
// console.log(testFour);
var testFive = '128' - 3; // this variable contains a string with 128 inside of it which is subtracted by 3 which returns 125
// console.log(testFive);
var testSix = "" * 9; // contains a empty string which is multiplied by 9 but since its getting multiplied by a number it will turn the empty string to a 0 which returns 0!
// console.log(testSix);
var testSeven = 'zero' - 1; // contains a string and a number which is being subtracted from each other then returns NaN
// console.log(testSeven);
var testEight = 'five'.length; // which is looking for the lenght of the string 'five' which returns 4
var testNine = 'five'[0] + 'ever'; // contains a string with an array of 0 and a string with text ever and thea rray of 0 focuses the f since it is the placement of 0 and f + ever returns fever.
// console.log(testNine);
var testTen = 'a' > 'b'; //string a greater than string b returns false
// console.log(testTen);
var testEleven = 'number'.length < 7; // the length of the number string is less than 7 which returns true since the length of 'number' is 6
// console.log(testEleven);
var testTwelve = '12' == 12; // string '12'  equality equals true
// console.log(testTwelve);
var testThirteen = 'twelve' == 12; // false because equality doesn't turn a word into a number
// console.log(testThirteen);
var testFourteen = '14' === 14; // returns false due to string equality only looks for same value so '14' === '14' will come out true 
// console.log(testFourteen);
var testFifteen = 'Hi there'[0] + 'open sesame'[2] + 'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] + 'BATMAN!'[6]; // returns hello because the [] operator is choosing the word in that placement of the string ex: 'Fortunate'[3] = t
// console.log(testFifteen);
*/
// how does an array work in a object?

// 7. 
// var string1 = "Hello, ";
// var string2 = "my name is ";
// var string3 = "Kingsley Pappagiorgio.";
// var combinedStrings = string1 + string2 + string3;
// console.log(combinedStrings);
// returns "Hello, my name is Kingsley Pappagiorgio"

// 8.
// var num1 = 8;
// var num2 = 52;
// var num3 = 60;
// var combinedNumbers = num1 + num2 + num3;
// console.log(combinedNumbers); // returns 120

// 9.
// var mixedNum1 = 10;
// var mixedString1 = "ten";
// var mixedNum2 = "10";
// var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1; 
// console.log(mixedConcatenation); returns 1010ten

// 10.
// var num4 = 0;
// var num5 = 0;

// if(num4 > 1) {
//     console.log("Num4 is greater than 1");
// } else {
//     console.log("Num4 is NOT greater than 1");
// }

// 11.
// var num4 = 5;
// var num5 = 0;

// if(num4 < num5 || num4 === num5) {
//     console.log("If statement ran!"); // this will run but if you were to change the num4 < num5 then...
// } else if (num5 === "0" || true) {
//     console.log("Else if statement ran");// this will run
// } else {
//     console.log("Else statement ran");
// }

/*
var num4 = 5;
var num5 = 0;

if(num4 > num5 && num4 === num5) {
    console.log("If statement ran!");
} else if (num5 === "0" || true) { // the else if statement is ran only due the its say if 0 is strictly equal to "0" which is false OR true its going to return true and run the else if statement
    console.log("Else if statement ran");
} else {
    console.log("Else statement ran");
}
*/
/*
var string1 = "this is a string";

for(var i = 0; i < string1.length; i++ ) {
    console.log(i, string1[i]);
};
// message was calling the var string1 letter by letter including the space using the for loop, it is looping through the whole string and consoling it to the console
*/
// 14.
// var string2 = "coding";
// var total = 0;

// for (var i = 0; i < string2.length; i++) {
//     total = total + i;
// };

// console.log(total); // returns 15

// 15.
// var string3 = "onomatopoeia";

// for(var i = 0; i < string3.length; i++) {
//     if (string3[i] == "o") {
//         console.log(i, string3[i]);
//     }
// }
                          
// 16. 
// var string4 = "You're gonna need a bigger boat.";

// for(var i = 0; i < string4.length; i++) {
//     if(string4[i] == "a" || string4[i] == "e" || string4[i] == "i" || string4[i] == "o" || string4[i] == "u") {
//         console.log(i, string4[i]);
    // }
// } returns the order of the vowels come in the string

// 17.
// function testStuff(a, b) {
//     if(a > 25 && b < 100) {
//         console.log(a + " is greater than 25 and " + b + " is less than 100");
//     } else {
//         console.log(a + " is NOT greater than 25 or " + b + " is NOT less than 100");
//     }
// }

// testStuff(10, 101); returns else
// testStuff(26, 99); returns if
// testStuff(100, 25); returns if

// 18,
// function testStuff2(c, d) {
//     if (c == 25) {
//         return c + " is equal to 25";
//     } else if (d <= 100) {
//         return d + " is less than or equal to 100";
//     } else {
//         return "Neither if nor else if statement ran";
//     };
// };
// console.log(testStuff2(26, 101)); returns else statement
// console.log(testStuff2(25, 99)); returns if statement
// console.log(testStuff2(102, 24)); returns else if statement
// 19.
function countVowels(someString) {
    var vowels = 0;
    for (var i = 0; i < someString.length; i++) {
        if(someString[i] == "a" || someString[i] == "e" || someString[i] == "i" || someString[i] == "o" || someString[i] == "u") {
            vowels++;
        }
    }
    return vowels;
}

console.log(countVowels("I am the very model of a modern major general"));
console.log(countVowels("Exeunt pursued by a bear"));
console.log(countVowels("o1234567890o"));




