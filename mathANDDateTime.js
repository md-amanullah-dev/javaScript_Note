// MATH FUNCTION 
const math = Math.round(4.7)
console.log( Math.round(4.7))// arround value krta h 4.7= 5 and 4.4 = 4
console.log( Math.floor(4.7))// ye point ke baad ki value ko print nhi krta h 
console.log( Math.trunc(4.2))// ye point ke baad ki value ko print nhi krta h 
console.log( Math.ceil(4.7))// isme point ke baad kuch bhi value ho usko 1 kr deta h 4.6 = 5 and 4.2 =5

console.log( Math.sign(4.2))// ye positive and negative number ko -1/1 return krta h 
console.log(Math.pow(2,3))// kisi bhi number ka power krne 2 ki power 3 = 8 
console.log(Math.sqrt(25))// kisi bhi number ka square root find krta h 25 = 5 
console.log(Math.abs(25))// kisi bhi number ka absolute value return krta h -5 =5 and 5 =5 


console.log(Math.sin((90 * Math.PI)/180))// ye sine ke kisi bhi degree ki vlue ko find krta h
console.log(Math.cos((90 * Math.PI)/180))// ye cos ke kisi bhi degree ki vlue ko find krta h
console.log(Math.tan((90 * Math.PI)/180))// ye tan ke kisi bhi degree ki vlue ko find krta h


console.log( Math.max(4,56,76,87,100,5,6))// maximum number ko find krta h  
console.log( Math.min(4,56,76,87,100,5,6))// manimum number ko find krta h  
console.log( Math.random())// random value generate krne ke liye kiya jata h  


// Date and time function

// const date = new Date() // current date time ko show krta h 
const date = new Date() // set own date and time  

// current date time show krne ke liye 
console.log(date.getTime) 
console.log(date.getDate) 
console.log(date.getFullYear) 
console.log(date.getMonth) 
console.log(date.getDay) 
console.log(date.getHours) 
console.log(date.getMinutes) 
console.log(date.getSeconds) 
console.log(date.getMilliseconds) 


// date time set krne ke liye 
console.log(date.setTime) 
console.log(date.setDate) 
console.log(date.setFullYear) 
console.log(date.setMonth)
console.log(date.setHours) 
console.log(date.setMinutes) 
console.log(date.setSeconds) 
console.log(date.setMilliseconds) 







