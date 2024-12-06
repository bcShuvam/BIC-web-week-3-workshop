// Q1. Even Positive Number Checker
// Write a program to verify whether a given number is both even and positive using relational operators and logical AND.
function negativePositive() {
  let num = 8;
  if (num >= 0 && num % 2 == 0) {
    console.log(`${num} is even an positive`);
  } else {
    console.log(`${num} is positive`);
  }
}
// negativePositive();

/////////////////////////////////////////////////////////////////
// 2.Buggy Code (Correct below code)
// Manish created an infinite loop! Help him by fixing the code in the code tab to pass this challenge.
// Look at the examples below to get an idea of what the function should do.

function printArray(number) {
  let newArray = [];
  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }
  return newArray;
}
// console.log(printArray(10));

/////////////////////////////////////////////////////////////////
// Q3.How Much is True?
// Create a function which returns the number of true values there are in an array.
// Examples
// countTrue([true, false, false,true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

function howMuchTrue(arr) {
  let count = 0;
  for (let i in arr) {
    if (arr[i] == true) {
      count += 1;
    }
  }
  console.log(`Number of true = ${count}`);
}
// howMuchTrue([true, false, false, true, false]);
// howMuchTrue([false, false, false, false]);

/////////////////////////////////////////////////////////////////
// Q4.Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something

function giveMeSomething(a) {
  return `something ${a}`;
}
// console.log(giveMeSomething("is better than nothing"));
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something"));

// Q5. Divisibility Checker
// Write a program(functional approach) to determine if a number is divisible by 4 and 6 but not by 8.
// Examples:
// Sample Input: Number: 48
// Sample Output: 48 is divisible by 4 and 6 but not by 8.

function divisibilityChecker(num) {
  if (num % 4 == 0 && num % 6 == 0 && num % 8 != 0) {
    return `${num} is divisible by 4 and 6 but not by 8.`;
  } else {
    return `${num} is not divisible by 4 and 6 but by 8.`;
  }
}

// console.log(divisibilityChecker(48));

// Q6. Positive/Negative Number Checker
// Write a program that determines whether a given number is positive or negative using conditional operators
// Examples:
// Sample Input: Number: -7
// Sample Output: -7 is a negative number

function positiveNegative(num) {
  if (num >= 0) {
    return `${num} is positive.`;
  } else {
    return `${num} is negative.`;
  }
}
// console.log(positiveNegative(-10));

///////////////////////////////////////////////////////////////////
// Q7. Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));

///////////////////////////////////////////////////////////////////////
// Q8. Older Than Me
// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialized with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than /the same age as} me.
// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   compareAge(otherPerson) {
//     if (this.age < otherPerson.age) {
//       return `${otherPerson.name} is older than me.`;
//     } else if (this.age > otherPerson.age) {
//       return `${otherPerson.name} is younger than me.`;
//     } else {
//       return `${otherPerson.name} is the same age as me.`;
//     }
//   }
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(otherPerson) {
    if (this.age < otherPerson.age) {
      return `${otherPerson.name} is older than me.`;
    } else if (this.age > otherPerson.age) {
      return `${otherPerson.name} is younger than me.`;
    } else {
      return `${otherPerson.name} is the same age as me.`;
    }
  }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2)); // "Joel is older than me."
console.log(p2.compareAge(p1)); // "Samuel is younger than me."
console.log(p1.compareAge(p3)); // "Lily is the same age as me."

/////////////////////////////////////////////////////////////////////
// Q9. Calculate the Total Price of Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// {
// "product": "Milk",
// "quantity": 1,
// "price": 1.50
// }
// Examples
// // 1 bottle of milk:
// getTotalPrice([
// { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5
// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
// { product: "Milk", quantity: 1, price: 1.50 },
// { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4
// // 3 bottles of milk:
// getTotalPrice([
// { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5
// // Several groceries:
// getTotalPrice([
// { product: "Milk", quantity: 1, price: 1.50 },
// { product: "Eggs", quantity: 12, price: 0.10 },
// { product: "Bread", quantity: 2, price: 1.60 },
// { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4
// // Some cheap candy:
// getTotalPrice([
// { product: "Chocolate", quantity: 1, price: 0.10 },
// { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3
// Notes
// There might be a floating point precision problem in here...

function getTotalPrice(groceries) {
  let newAmt = 0;
  for (let grocery in groceries) {
    // console.log(groceries[grocery]);
    newAmt += groceries[grocery].quantity * groceries[grocery].price;
  }
  return `newAmt`;
}

console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }])); // 1.5
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Bread", quantity: 2, price: 1.6 },
    { product: "Cheese", quantity: 1, price: 4.5 },
  ])
);
