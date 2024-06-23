// array ek data ka collection hota h

// const arr = [1,21,13,64,50,16]; // array
// console.log(arr)// print the array
// console.log(arr[0]);// specific element ko print kerne ke liye
// console.log(arr[1]);// specific element ko print kerne ke liye
// console.log(arr[3]);// specific element ko print kerne ke liye

// const arr = [11,22,"rose",76.3,"adil"];

// const arr = [];
// arr[0] = 12 // 0 index pr element ko insert krna
// arr[1] = 15 // 0 index pr element ko insert krna
// arr[2] = 20 // 0 index pr element ko insert krna
// // console.log(arr)

// array method
// const arr = [1,12,23];

// arr.push(7)// arr ke last me element ko insert krta h
// arr.pop()// arr ke last element ko delete krta h
// arr.unshift(7)// arr ke first me element ko insert krta h
// arr.shift()// arr ke first element ko delete krta h
// arr.splice(0,2)// arr ke range me element ko delete kr deta h aur ek new arr return krta h(0-start kaha se krna h and 2-kitna elemnt delete krna h )
// arr.reverse()// arr ke elemnt ko reverse krne ke liye kiya jata h
// arr.slice(1,3)// slice ke jarye ek specific range ke elemt ka arr return krta h
// arr.includes(3)// ye check krta h ke arr me elemnt mojud h ya nhi true/false return krta h

// // arr me loop ke help se 100 time elemnt insert krnana
// const arr = [];
// for(i =1;i<=100;i++){
//     arr[i] = i;
// }
// console.log(arr);

// advance array method
// find method
// const arr = [2, 4, 5, 6, 8, 3, 46, 9];
// arr.find(myArr); // find method ka use kr arr ke elemt ko find aur uska index find kr skte h
// function myArr(value, index) {  // regular function declare krne se pahle call kiya ja skta h (hoisting kahte h )
//   if (value === 6) {
//     console.log("6 exist in: ", index);
//   }
// }

// const arr = [2, 4, 5, 6, 8, 3, 46, 9];
// arr.find(myArr); // find method ka use kr arr ke elemt ko find aur uska index find kr skte h(sirf ek elemt)
// const myArr = (value, index) => {  // arrow function declare krne se pahle call nhi kiya ja skta
//   if (value === 6) {
//     console.log("6 exist in: ", index);
//   }
// }

// const arr = [2, 4, 5, 6, 8, 3, 46, 9];
// const myArr = (value, index) => {  // arrow function declare krne se pahle call nhi kiya ja skta
//     if (value === 6) {
//         console.log("6 exist in: ", index);
//     }
// }
// arr.find(myArr); // find method ka use kr arr ke elemt ko find aur uska index find kr skte h

// const arr = [2, 4, 5, 6, 8, 3, 46, 9];
// arr.find((value, index) => {  // arrow function
//   if (value === 4) {
//     console.log("6 exist in: ", index);
//   }
// });

// filter method
// const arr = [2, 4, 5, 6, 8, 3, 46, 9];
// const result = arr.filter((value,index)=>{ // filter data filter krke ek arr return krta h
//     if(value > 2){
//         return value;
//     }
// })
// console.log(result)

// // every method
// const arr = [2, 4, 5, 6, 8, 3, 46, 9];
// const result = arr.every((value, index) => {
//   // ye arr ke sare elemt se check krta condition ke base pr aur true aur false return krta
//   if (value > 4) {
//     return value;
//   }
// });
// console.log(result);

// // some method
// const arr = [2, 4, 5, 6, 8, 3, 46, 9];
// const result = arr.some((value, index) => {
//   //ye check krta h sare elemmt se compare ktra h true/false return krta h
//   if (value > 4) {
//     return value;
//   }
// })
// console.log(result);


// for of loop
// const arr = [1,2,3,4,56,8];
//  for(let value of arr){ //arr ko itarate krne ke liye kiya jata 
//     console.log(value)

// }



////forEach
// arr.forEach((value,index)=>{//arr ko itarate krne ke liye kiya jata lekin ye value return nhi krta h 
//     console.log(value)
// });

// const result = arr.forEach((value,index)=>{//lekin ye value return nhi krta h  (iss problem ko solve krne ke liye map k ause kiya jata h)
//     // console.log(value)
//     return value;
// });
// console.log(value) // undefine


// map 
// const arr = [1,2,3,4,56,8];
// const result = arr.map((value,index)=>{ //map method ek arr return krta h ye pura arr return krta 
//     return value
// })
// console.log(result)

// reduce method 
const arr = [1,2,3,4,56,8];
const result = arr.reduce((Prevalue,currValue,index)=>{ //reduce method ek single arr return krta h(isme prev value ka track and currect value aur index and arr hota h )  
    return value
})
console.log(result)

