// console.log("This is new1.js")



// const givenname="oracle courses";
// console.log(givenname)
// givenname="java courses"
// console.log(givenname)


// let city="pune";
// console.log(city)
// city="mummbai"
// console.log(city)

// var place="india";
// console.log(place)
// var place="usa";
// console.log(place)


// function generateWelcomeMessage(name) {
//   return "Welcome, "+name+ " ! Good morning";
// }

// var Welcome_message=generateWelcomeMessage("John");
// console.log(Welcome_message)


// function add(a,b){
//   return a+b;
// }
// let sum=add(30,60);
// console.log(sum)

// function Game(name,score){
  
//   let level=score+2;
  
//   let level1=score-2
  
//   let level2=score*2;
  
//   let level3=score/2;
//   return "playerName: "+name+" score: "+score+" level: "+level+" level1: "+level1+" level2: "+level2+" level3: "+level3;
// }

// let result=Game("tony",100);
// console.log(result)






// function Game(name, score) {
//   return "playerName: " + name + " score: " + score;
// }

// let name = "tony";
// let score = 90;

// let result3 = Game(name, score);

// let level  = score + 3;
// let level1 = score - 3;
// let level2 = score * 2;
// let level3 = score / 3;

// console.log(result);
// console.log(level);
// console.log(level1);
// console.log(level2);
// console.log(level3);


// function area(length,breadth){
//   return length*breadth;
// }
// let rectangle=area(7,5);
// console.log(rectangle)


// function factorial(n) {
//  if(n==0|n==1){
//   return 1;
//  }
// return n*factorial(n-1);
// }
// console.log(factorial(5)); 


// function calculator(num1,num2){
//   let add=num1+num2;
//   let sub=num1-num2;
//   let mul=num1*num2;
//   let div=num1/num2;
//   return "add: "+add+ " sub: "+sub+" mul: "+mul+" div: "+div;
// }
// let work=calculator(6,4);
// console.log(work)

// function compoundinterest(p,r,t){
//   let CI=p*(Math.pow((1+r/100),t));
//   return CI;
// }
// let interest=compoundinterest(10,4,5);
// console.log(interest)



//taking input from user in js
// let input1=prompt("enter a number:");
// console.log(input1)

// function call(num1,num2,operator){
//   if(operator==='+'){
//     return num1+num2;
//   }
//   if(operator==='-'){
//     return num1-num2;
//   }
//   if(operator==='*'){
//     return num1*num2;
//   }
//   if(operator==='/'){
//     return num1/num2;
//   }

// }
// // let result=call(6,4,'+');
// // console.log(result)



//grading sysytem morethan 75-a,morethan60-b,c,o,f
// let marks=prompt("enter a number:");
// if(marks>=90){
//   console.log("O")
// }
// else if(90>marks<=75)

//   console.log("A")

// else if(75>marks<=60)

//   console.log("B")

// else if(60>marks<=40)

//   console.log("C")

// else
//  console.log("F")



//a peron travelling from a to b 30kmph max speed is 120 and every 10mins the speed is doubled and wt is the disatnce at 96mins
// let speed = 30;
// let distance = 0;

// // Cover first 90 minutes in 10-min chunks
// for (let i = 10; i <= 90; i += 10) {
//   distance += speed / 6;   // since 10 min = 1/6 hr
//   if (speed < 120) {
//     speed *= 2;
//   }
// }

// // Remaining 6 minutes (96 - 90 = 6)
// distance += speed * (6 / 60);

// console.log("Total Distance: " + distance + " km");


//the basic pay of auto is 30 rupees for 4km for nxt 5km price is 10,for next 10km price is 15,if the kms are morethan then price is 20 user travelled 19.5km what will be the price

// function calculateFare(distance) {
//   let fare = 0;

//   // First 4 km
//   if (distance <= 4) {
//     fare = 30;
//     return fare;
//   } else {
//     fare = 30;
//     distance -= 4;
//   }

//   // Next 5 km (4 to 9)
//   if (distance <= 5) {
//     fare += distance * 10;
//     return fare;
//   } else {
//     fare += 5 * 10;
//     distance -= 5;
//   }

//   // Next 10 km (9 to 19)
//   if (distance <= 10) {
//     fare += distance * 15;
//     return fare;
//   } else {
//     fare += 10 * 15;
//     distance -= 10;
//   }

//   // Beyond 19 km
//   fare += distance * 20;

//   return fare;
// }

// let distance=calculateFare(19.5);

// console.log(distance);


// let i=0;
// while(i<3){
//   console.log(i);
//   i++;
// }
//to print 5 table using while loop
// let n=5;
// let v=1;
// while(v<=10){
//   a=n*v;
//   v++;
//   console.log(a);
// }


// let n=prompt("enter a number:");
// let v=1;
// while(v<=10){
//   a=n*v;
//   v++;
//   console.log(a);
// }


//add an event listener
// MyDiv.addEventListener('click', () =>{
//   alert('Div clicked!');
// });