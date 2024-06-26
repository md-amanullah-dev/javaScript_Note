const inputField = document.getElementById('myInput')
const btn = document.getElementById('btn')
const deleteBtn = document.getElementById('deleteBtn')

// /// Session Storage (1 to 5 MB)
// // session storage ka use kr ke data store kiya jata h sirf ussi tab ke liye 
// const btnClick = ()=>{
//     alert(inputField.value);
//     sessionStorage.setItem("key1",inputField.value);//input se jo v data aaya h usko session storage me store kr liye(data ko set krne ke lite setItem ka use kiya jata h )

// }
// // alert(sessionStorage.getItem("key1"));//getItem ki ka use kr ke store data ko session me get kr skte h 

// const btnDelete = ()=>{
//     // sessionStorage.removeItem("key1");// removeItem ka use krke session me data ko delete krne ke liya kiya jaya 
//     sessionStorage.clear();// sare data ko clean kr deta h 
//     // sessionStorage.removeItem("key1");// removeItem ka use krke session me data ko delete krne ke liya kiya jaya 

//     console.log("first")
// }



///// Local Storage (5 to 10 MB store)
// local storage ka use kr ke data store kiya jata h local system ke liye (isme data tb tk store rahta h jb tk usko remove n kiya jaye )  
const btnClick = ()=>{
    alert(inputField.value);
    localStorage.setItem("key1",inputField.value);//input se jo v data aaya h usko local storage me store kr liye(data ko set krne ke liye setItem ka use kiya jata h )

}
// alert(localStorage.getItem("key1"));//getItem ki ka use kr ke store data ko local me get kr skte h 
const btnDelete = ()=>{
    localStorage.removeItem("key1");// removeItem ka use krke local me data ko delete krne ke liya kiya jaya 
    // localStorage.clear();// sare data ko clean kr deta h 
    // localStorage.removeItem("key1");// removeItem ka use krke local me data ko delete krne ke liya kiya jaya 

}


// Object ko string me convert kr ne ke liye 
// JSON.stringify()

// string ko object me convert krne ke liye 
// JSON.parse() 