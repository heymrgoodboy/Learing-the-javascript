let a = 20;
let b = 10;

a++; b++;// using the increment operator to  increase the values of a and b by 1
console.log(a, b);
a--; b--;// using the decrement operator to decrease the values of a and b by1
console.log(a, b);

// using the arithemetic operators

console.log("Sum of the a and b is " + (a + b));

console.log("Difference of the a and b is " + (a - b));

console.log("Product of the a and b is " + (a * b));

console.log("Division of the a and b is " + (a / b));

console.log("Modulus of the a and b is " + (a % b));
console.log("a==b", a == b);
console.log("a!=b", a != b);
console.log("a===b", a === b);
let c = prompt("Enter a number");
if (c % 5 == 0) {
    prompt("The number is multiple of 5");

}
else {
    prompt("The number is not multiple of 5");
}

// A small project in java script for giving the  grades of students using js
let score = prompt("Enter your Marks");
if (score >= 80 && score <= 100) {
    console.log("You have scored    A");
}
else if (score >= 70 && score <= 79) {
    console.log("You have scored B");
}
else if (score >= 60 && score <= 69) {
    console.log("You have scored C");

}
else if (score >= 50 && score <= 59) {
    console.log("You have scored D");

}
else {
    console.log("You are failed");
}

for (let i in student) {
    console.log(student[i]);
}

// Array in java script
let marks=[185,96,44,37,76,60];
let ssum=0;
for(let mark of marks)
    {
        ssum+=mark;
    }
let average=(sum/marks.length);
average=`The average is the = ${average} `;
console.log(average);
let prices=[250,645,300,900,50];
let sum=0;
let afterDis=0;
let i=0;
const dis=(10/100);
for (let price in prices)
    {
        console.log("The price  before discount",prices[price]);
    }
for( i in prices)
    {
        sum=(prices[i]*dis);
        afterDis=prices[i]-sum;
        
        console.log("The price after discount",afterDis);
              

       
        
    }