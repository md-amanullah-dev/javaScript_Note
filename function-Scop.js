// function kisi bhi specific task ko krne ke liye function ka use kiya jata h

function functionName (){
    // any statement
}
functionName()// call the function

function functionName (){
    let x = 10;
    console.log("this is x value",x)
}
functionName()// call the function

function functionName (a,b,c){// parameter
      let result = a+b+c
        console.log("value",result)
    }
    functionName(5,4,1)// pass the argument
    functionName(15,14,12)// pass the argument
    functionName(9,14,19)// pass the argument

// annonous function
const functionName =  function  (a,b,c){// parameter
      let result = a+b+c
        return result
    }
const ans = functionName(2,5,7);
console.log(ans)
 console.log(functionName(5,4,1))

// print total of array usnig function
function totalOfArr(arr = []) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

const arr = [1, 2, 3,4, 5];
console.log(totalOfArr(arr));


// scoping 
let a =10;
{
    let a= 20;
    let b = 30
    var c= 40;
    console.log(a) // print 20
    console.log(b) // print 30
    console.log(c) // print 40
}
console.log(a)//print 10
console.log(b)//not print generate error let ko sirf ussi block me access krte h 
console.log(c)// print 40 var ko kahi se v access kr skte h 
