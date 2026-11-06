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
console.log("step 5");
const marks = Number(prompt("Enter marks from 0 to 100:"));

if (Number.isNaN(marks) || marks < 0 || marks > 100) {
  alert("Enter valid marks between 0 and 100.");
} 
else {
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

  console.log(`Grade: ${grade}`);

  switch (grade) {
    case "A+":
      console.log("Outstanding");
      break;
    case "A":
      console.log("Excellent");
      break;
    case "B":
      console.log("Good");
      break;
    case "C":
      console.log("Needs improvement");
      break;
    default:
      console.log("Try again");
  }
}
console.log("step-6 -loops");
const n = Number(prompt("Enter a positive whole number:"));

if (!Number.isInteger(n) || n <= 0) {
  console.log("Enter a positive whole number.");
}
 else {
  console.log("Multiplication table");

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }

  console.log("Sum from 1 to n");

  let count = 1;
  let sum = 0;

  while (count <= n) {
    sum += count;
    count++;
  }

  console.log(`Sum = ${sum}`);

  console.log("Even numbers");

  for (let i =1;i<=n;i++) {
    if(i%2===0)
    
    console.log(i);
  }
}
