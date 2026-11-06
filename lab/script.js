// console.log("Lab ready");
// const customer = "Asha";
//const price = 250;
//let quantity = 3;
//console.log(`${customer} is buying ${quantity} item at Rs.${price}.`);
const amount = price * quantity;

const discountRate = amount > 1000 ? 0.1 : 0.05;
const discountAmount = amount * discountRate;

const discountedAmount = amount - discountAmount;
const gst = discountedAmount * 0.18;

const totalBill = discountedAmount + gst;
console.log("BILL");
console.log(`Amount: Rs. ${amount.toFixed(2)}`);
console.log(`Discount: Rs. ${discountAmount.toFixed(2)}`);
console.log(`GST: Rs. ${gst.toFixed(2)}`);
console.log(`Payable: Rs. ${totalBill.toFixed(2)}`);
console.log("step 4");
const customer = prompt("Enter your Name");
const price = 250;
const quantity = Number(prompt("enter quantity"));
if (Number.isNaN(quantity) || quantity <= 0) {
  alert("Please enter a valid positive quantity.");
} 
else {
 
  const amount = price * quantity;

  const discountRate = amount > 1000 ? 0.1 : 0.05;
  const discountAmount = amount * discountRate;

  const discountedAmount = amount - discountAmount;
  const gst = discountedAmount * 0.18;

  const totalBill = discountedAmount + gst;
  console.log("BILL");
  console.log(`Amount: Rs. ${amount.toFixed(2)}`);
  console.log(`Discount: Rs. ${discountAmount.toFixed(2)}`);
  console.log(`GST: Rs. ${gst.toFixed(2)}`);
  console.log(`Payable: Rs. ${totalBill.toFixed(2)}`);
}
