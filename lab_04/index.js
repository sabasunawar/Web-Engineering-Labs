// LAB 4 TASK1

// let option = prompt("Press the number to perform any operation \n 1. + \n 2. - \n 3. * \n 4. / \n 5. ++ \n 6. -- \n 7. %");
// let num1,num2;
// let Result;
// switch(option){
//     case "1":
//     num1=parseFloat(prompt("Enter Number 1: "));
//     num2=parseFloat(prompt("Enter Number 2: "));
//     Result=num1+num2;
//     alert("Result is:  "+ Result);
//     break;
//     case "2":
//     num1=parseFloat(prompt("Enter Number 1 : "));
//     num2=parseFloat(prompt("Enter Number 2 : "));
//     Result=num1-num2;
//     alert("Result is:  "+ Result);
//     break;
//     case "3":
//         num1=parseFloat(prompt("Enter Number 1 : "));
//         num2=parseFloat(prompt("Enter Number 2 : "));
//         Result=num1*num2;
//         alert("Result is:  "+ Result);
//     break;
//     case "4":
//         num1=parseFloat(prompt("Enter Number 1 : "));
//         num2=parseFloat(prompt("Enter Number 2 : "));
//         Result=num1/num2;
//         alert("Result is:  "+ Result);
//     break
//     case "5":
//         num1=parseFloat(prompt("Enter Number : "));
//         Result= ++ num1;
//         alert("Result is:  "+ Result);
//     break;
//     case "6":
//         num1=parseFloat(prompt("Enter Number : "));
//         Result=-- num1;
//         alert("Result is:  "+ Result);
//     break;
//     case "7":
//         num1=parseFloat(prompt("Enter Number : "));
//         num2=parseFloat(prompt("Enter % : "));
//         Result=(num1*num2)/100
//         alert("Result is:  "+ Result);
//     break;
//     default:
//         alert("Invalid Input");
//     break;
//  }

//LAB 4 TASK 2
 
// var array=["Banana" ,"Apples", "Oranges","Blueberries"];
// console.log("Fruit Array is  :", array);
// array.shift();
// console.log("1. Remove 'Banana' From Array:", array);
// array.sort();
// console.log("2. Sorted Array is : " ,array);
// array.push("kiwi");
// console.log("3. Push 'Kiwi' at the end of teh array: " , array);
// array.shift();
// console.log("4. Remove 'Apple' From Array:", array);
// array.reverse();
// console.log("5. Reverse Array is :" ,array);  


//LAB 04 TASK 03
// Alarm ringing !
// I Suppose by default there is a prompt saying “ Alarm is ringing”. Press ‘S’ to snooze and ‘D’ to dismiss
// II If user selects ‘D’, program will be dismissed with a prompt “Good Morning”
// III If user select ‘S’ , the program “ Alarm is ringing”. Press ‘S’ to snooze and ‘D’ to dismiss will rerun and again the prompt will be  (repeat from step I)
// IV upon entering wrong input program will prompt “wrong input” and program ends

// do{
// var input=prompt("Alarm is Ringing.\nPress 'S' to snooze and 'D' to dismiss.");
// switch(input.toUpperCase().trim()){
//     case"S":
//     break;

//     case"D":
//     alert("Good Morning!");
//     break;

//     default:
//     alert("Wrong Input");
//     break;
//   }
// } 
// while(input=="S"||"s");

//LAB 04 TASK 04

// Create an object and an array which we will use in our facebook exercise. 
//  Create an object that has properties "username" and "password". Fill those values in with strings.
//  Create an array which contains the object you have made above and name the array "database".
// Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// var username,password;
// const object = {
//     username:"Saba Sunawar",
//     password:"pass123",  
// };

// const database=[object];

// let obj1={},obj2={},obj3={};

// const newsfeed =[
 
//     obj1={
//         username:"saba",
//         timeline:"Sunawar",
//     },

//     obj2={
//         username:"saba",
//         timeline:"Rao",
//     },

//     obj3={
//         username:"saba",
//         timeline:"Rajput",
//     },

// ];

// console.log(object);
// console.log(database);
// console.log(newsfeed);

