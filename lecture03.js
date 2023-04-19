//------------String------------------//
// string methods
/*-----------chartAt()------*/
//1) chartAt() - returns the character at a specified index in the string

// let text = "Hello world";
// let letter = text.charAt();
// console.log(letter);

// let text2 = "Hello world";
// let letter2 = text.charAt(text2.length-1);
// console.log(letter2);

/*--------concat()--------*/
//2) concat() joins two or more strings, doesn't change the existing string and returns a new string.

//join two str
// const text1 = "Hello"
// const text2 = "Azamat"
// const result1 = text1.concat(" ", text2);
// console.log(result1);

// join 3 str
// const Text1 ="Assalamu aleykum"
// const Text2 = "Teacher."
// const Text3 = "How are you?"
// const Result1 = Text1.concat(' ', Text2, ' ', Text3);
// console.log(Result1);

/*---------------replace()---*/
//3) replace() - searches a string for a value or a regular expression, returns a new string with the value(s) replaced. It doesn't change the original string.

// const text1 = "Hello  Azamat"
// const result1 = text1.replace("Azamat", "Lochin");
// console.log(result1);

// const text1 = "The quick brown dog jumps over the lazy dog"
// const result1 = text1.replaceAll("dog", "monkey");
// console.log(result1);


//-----------------split()----//
//4) split() - splits a string into an array and does'n change the original
// const text1 = "How are you doing?"
// const result1 = text1.split();
// const result2 = text1.split("");
// const result3 = text1.split(" ");
// //const result1 = text1.split(" ", 3);
// console.log(result1);
// console.log(result2);
// console.log(result3);

//5) /*-----substring(start, end) */
// substring() 
// const text1 = "Hello world"
// // const result1 = text1.substring("2");
// const result1 = text1.substring(2,5);
// console.log(result1);

//6) /*slice (start,end) */
// const text1 = "Hello world"
// const result1 = text1.substring(2,5);
// //const result1 = text1.slice(-4);
// console.log(result1);

//7 /**toLowerCase()*/
// const text1 = "HelLo world"

// const result1 = text1.toLowerCase();
// console.log(result1);

// //8 /*toUpperCase()*/
// const Text1 = "HelLo world"

// const Result1 = Text1.toUpperCase();
// console.log(Result1);

//9 //-----trim()----//
//Method trim() removes whitespace from both sides of a string.
// const Text1 = "   HelLo world    "
// const Result1 = Text1.trim();
// console.log(Result1);

//10) //----includes()----//
// const Text1 = "HelLo world"
// const Result1 = Text1.includes("world");
// console.log(Result1);

//11) //----toString-----//
// var n = 99;
// console.log(typeof(n));
// var str = n.toString();
// console.log(typeof(str));

//12) ----indexOf()----
// var n = "JavaScript is not C++";
// var str = n.indexOf("JavaScript");
// console.log(str);

//13)--------repeat()--
// var n = "JavaScript is not Java. ";
// var repeat = n.repeat("2");
// console.log(repeat);

//14) --- at()---
// var n = "JavaScript is not Java";
// console.log(n.at(0));
// console.log(n.at(4));

