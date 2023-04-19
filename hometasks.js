//-------------TASKS----------//
//1)
// function giveMeSomething(string){
//     var addedWord = "something";
//     return addedWord.concat(" ", string)
// }
// console.log(giveMeSomething("is better than nothing"));

//2)
// function nameString(string){
//     var addedWord = "Matt";
//     return addedWord.concat(" ", string)
// }
// console.log(nameString("Edabit"));

//3) HowManyVowels
// function countVowels(str){
//     let vowels = "aeiou";
//     var count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i].toLowerCase())>-1) {
//             count++
//         }
//     }return count;
// }
// console.log(countVowels("Celebration"));




//4) Find First Vowel
// function FirstVowel(str){
//    let vowels = ["a","e", "o", "i", "u"];
//     for (let i = 0; i<str.length; i++){
//         if (vowels.includes(str[i].toLowerCase())){
//             return i;
//         }
//     }return -1
// }
// console.log(FirstVowel("splte"));


//5) Find Bomb
// function findBomb(str){
//     let newStr = str.toLowerCase();
//  if(newStr.includes("bomb")){
//     return "Duck!!!"
//  }
//  else{
//     return "There is no bomb, relax"
//  }
// }
// console.log(findBomb("There is a ball with BOMB"));

//6)charCount 
// function charCout (a, str) {
//     let cnt = 0;
//     for (let i = 0; i<str.length; i++){
//         if (a.includes(str[i])){
//             cnt ++;
//         }
//     }
//     return cnt;
// }
// console.log(charCout("a", "edabit"));
// console.log(charCout("c", "Chamber of secrets"));
// console.log(charCout("b", "big fat bubble"));


//7) 
// function doubleChar(str) {
//     let cnt = "";
//     let b = str.split("");
//     for (let i = 0; i < b.length; i++) {
//       cnt +=(b[i].repeat(2));  
//     } return cnt;
// }
// console.log(doubleChar("String"));

//8)
// function satHelloBye(name, num){
//     let greeting = "Hello";
//     let farewell = "Bye";
//     let Name = name.charAt(0).toUpperCase();
//     if (num == 1){
//         return greeting.concat(" ", Name+name.slice(1));
//     } else{
//         return farewell.concat(" ", Name+name.slice(1));
//     }
// }
// console.log(satHelloBye("alon", 1));
// console.log(satHelloBye("Tomi", 0));
// console.log(satHelloBye("jose", 0));







