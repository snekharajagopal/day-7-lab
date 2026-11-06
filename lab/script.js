// console.log("Lab ready");
// const customer = "Asha";
//const price = 250;
//let quantity = 3;
//console.log(`${customer} is buying ${quantity} item at Rs.${price}.`);
// const amount = price * quantity;

// const discountRate = amount > 1000 ? 0.1 : 0.05;
// const discountAmount = amount * discountRate;

// const discountedAmount = amount - discountAmount;
// const gst = discountedAmount * 0.18;

// const totalBill = discountedAmount + gst;
// console.log("BILL");
// console.log(`Amount: Rs. ${amount.toFixed(2)}`);
// console.log(`Discount: Rs. ${discountAmount.toFixed(2)}`);
// console.log(`GST: Rs. ${gst.toFixed(2)}`);
// console.log(`Payable: Rs. ${totalBill.toFixed(2)}`);
// console.log("step 4");
// const customer = prompt("Enter your Name");
// const price = 250;
// const quantity = Number(prompt("enter quantity"));
// if (Number.isNaN(quantity) || quantity <= 0) {
//   alert("Please enter a valid positive quantity.");
// } 
// else {
 
//   const amount = price * quantity;

//   const discountRate = amount > 1000 ? 0.1 : 0.05;
//   const discountAmount = amount * discountRate;

//   const discountedAmount = amount - discountAmount;
//   const gst = discountedAmount * 0.18;

//   const totalBill = discountedAmount + gst;
//   console.log("BILL");
//   console.log(`Amount: Rs. ${amount.toFixed(2)}`);
//   console.log(`Discount: Rs. ${discountAmount.toFixed(2)}`);
//   console.log(`GST: Rs. ${gst.toFixed(2)}`);
//   console.log(`Payable: Rs. ${totalBill.toFixed(2)}`);
// }
// console.log("step 5");
// const marks = Number(prompt("Enter marks from 0 to 100:"));

// if (Number.isNaN(marks) || marks < 0 || marks > 100) {
//   alert("Enter valid marks between 0 and 100.");
// } 
// else {
//   let grade;

//   if (marks >= 90) {
//     grade = "A+";
//   } else if (marks >= 75) {
//     grade = "A";
//   } else if (marks >= 60) {
//     grade = "B";
//   } else if (marks >= 40) {
//     grade = "C";
//   } else {
//     grade = "Fail";
//   }

//   console.log(`Grade: ${grade}`);

//   switch (grade) {
//     case "A+":
//       console.log("Outstanding");
//       break;
//     case "A":
//       console.log("Excellent");
//       break;
//     case "B":
//       console.log("Good");
//       break;
//     case "C":
//       console.log("Needs improvement");
//       break;
//     default:
//       console.log("Try again");
//   }
// }
// console.log("step-6 -loops");
// const n = Number(prompt("Enter a positive whole number:"));

// if (!Number.isInteger(n) || n <= 0) {
//   console.log("Enter a positive whole number.");
// }
//  else {
//   console.log("Multiplication table");

//   for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
//   }

//   console.log("Sum from 1 to n");

//   let count = 1;
//   let sum = 0;

//   while (count <= n) {
//     sum += count;
//     count++;
//   }

//   console.log(`Sum = ${sum}`);

//   console.log("Even numbers");

//   for (let i =1;i<=n;i++) {
//     if(i%2===0)
    
//     console.log(i);
//   }
// }
// console.log("step 7 pattern");
// console.log("Star Triangle");
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let line = "";
//   for (let j = 1; j <= i + 1; j++) {
//     line += "*";
//   }
//   console.log(line);
// }
// console.log("Number Triangle");

// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }
// console.log("step 8 fizzbuzz and primes");
// console.log("Printing FizzBuzz");
// for (let i = 1; i <= 30; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// console.log("Prime Numbers from 2 to 50");
// for (let num=2; num<=50;num++){
//     let isPrime=true;
//     for(let i=2; i<num;i++){
//         if(num%i===0){
//             isPrime=false;
//             break;
//         }
       
//     }
//     if(isPrime){
//          console.log(num);

//     }
   

// }
console.log("step 9 show on the page");
const price = 250;

const quantityInput = document.getElementById("quantity");
const output = document.getElementById("output");

const marksInput = document.getElementById("marks");
const gradeOutput = document.getElementById("gradeOutput");

document.getElementById("billButton").addEventListener("click", function () {
  const quantity = Number(quantityInput.value);

  if (!Number.isInteger(quantity) || quantity <= 0) {
    output.textContent = "Enter a valid positive whole quantity.";
    return;
  }

  const amount = price * quantity;
  const discountRate = amount > 1000 ? 0.1 : 0.05;
  const discount = amount * discountRate;
  const discountedAmount = amount - discount;
  const gst = discountedAmount * 0.18;
  const payable = discountedAmount + gst;

  output.textContent =
    `Amount: Rs. ${amount.toFixed(2)} | ` +
    `Discount: Rs. ${discount.toFixed(2)} | ` +
    `GST: Rs. ${gst.toFixed(2)} | ` +
    `Payable: Rs. ${payable.toFixed(2)}`;
});

document.getElementById("gradeButton").addEventListener("click", function () {
  const marks = Number(marksInput.value);

  if (
    marksInput.value.trim() === "" ||
    Number.isNaN(marks) ||
    marks < 0 ||
    marks > 100
  ) {
    gradeOutput.textContent = "Enter marks from 0 to 100.";
    return;
  }

  let grade;

  if (marks >= 90) {
    grade = "A+";
  } else if (marks >= 75) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 40) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  let remark;

  switch (grade) {
    case "A+":
      remark = "Outstanding";
      break;
    case "A":
      remark = "Excellent";
      break;
    case "B":
      remark = "Good";
      break;
    case "C":
      remark = "Needs improvement";
      break;
    default:
      remark = "Try again";
  }

  gradeOutput.textContent = `Grade: ${grade} and Remark: ${remark}`;
});

