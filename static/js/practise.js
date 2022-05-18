function hello(name){
    console.log("hello " + name);
    }
hello("Ashwini");


// Takes two numbers and adds them
 function addition(a, b) {
    return a + b;
  } 

  console.log("Addition Results : "  + addition(390,678));

  // Functions can call other functions
 function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  } 

  console.log("doubleAddition suts is " + doubleAddition(33,25));

  //Arrow functions are also known as fat arrow functions
   //Simple JavaScript log statement

function printHello() {
    return "Hello there!";
  }

  //can be written as 
  printHello = () => "Hello there!";
  
  // Converted to an arrow function
 //addition1 = (a, b) => a + b;
 //doubleAddition1 = (c,d) => addition1(c, d) * 2;


let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
     console.log("I love " + vegetables[i]);
 }

