// console.log(document.body.children);//ek HTML bodye ke sare child elemnt ko access krne ke liye kiya jata h

// console.log(document.body.firstChild);// body ke first child ko access kr skte h 
// console.log(document.body.lastChild);// body ke last child ko access kr skte h 

// console.log(test);// direct id pass kr ke access kr skte h
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.getElementsByName()


const test = document.getElementById('test');

test.innerHTML = "<spn>nice name </spn>";// ye ek html element likhne ke liye use kiya jata h 
test.textContent = "new text"; // ek element ke unser ka text chnage krne ke liye kiya jata 
test.innerText = "new text" // ek element ke unser ka text chnage krne ke liye kiya jata

test.style.display = "flex";
test.style.position = "left";
test.style.color = "green";
test.style.backgroundColor = "blue";   //// dom ke use krke style v kr skte h 
test.style.border = "black";

// const btn = document.getElementById('btn');
// btn.style.color = "white";
// btn.style.backgroundColor = "gray"
// btn.style.height = "30px"                 //// style the button using dom
// btn.style.width = "100px"
// btn.style.cursor = "pointer"
// btn.style.border = "solid black 2px"


// const result = document.querySelector('.test');// ye sirf matching first elemnt ko select krta h 
// result.innerText = "hi this is rose";

// const result = document.querySelectorAll('.test');// ye sirf matching first elemnt ko select krta h 
// result.innerText = "hi this is rose";

// const attribute = btn.getAttribute("class");// attribute kya h html elemnt ke under 
// console.log(attribute)

// const attribute = btn.setAttribute("class","yes");//attrute set krne ke liye  
// console.log(attribute)


// element create krna
// const h2 = document.createElement("h2");
// h2.textContent = "Adil rose"
// document.body.appendChild(h2)// sbse last me elemt add hota 
// document.body.prepend(h2)// sbse starting me elemt add hota 


// add h2 using add button onClick
const btn = document.getElementById('btn');
function printH2(){  //using addEventListener
const h2 = document.createElement("h2");
h2.textContent = "Adil rose" 
document.body.prepend(h2)
}
// delete h2 using add button onClick
const del = document.getElementById('delete');
function deleteH2(){  //using addEventListener
const h2 = document.querySelector("h2");
h2.remove();
}
