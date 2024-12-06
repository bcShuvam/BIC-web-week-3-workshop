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
// negativePositive(); // Output: 8 is even an positive

//////////////////////////////////  Q2  ////////////////////////////////////////////
// Q2. Buggy Code (Correct below code)
// Manish created an infinite loop! Help him by fixing the code in the code tab to pass this challenge.
// Look at the examples below to get an idea of what the function should do.

function printArray(number) {
  let newArray = [];
  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }
  return newArray;
}
// console.log(printArray(10)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//////////////////////////////////  Q3  ////////////////////////////////////////////
// Q3. How Much is True?
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
// howMuchTrue([true, false, false, true, false]); // Output: Number of true = 2
// howMuchTrue([false, false, false, false]); // Output: Number of true = 0

//////////////////////////////////  Q4  ////////////////////////////////////////////
// Q4.Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something

function giveMeSomething(a) {
  return `something ${a}`;
}
// console.log(giveMeSomething("is better than nothing")); // Output: something is better than nothing
// console.log(giveMeSomething("Bob Jane")); // Output: something Bob Jane
// console.log(giveMeSomething("something")); // Output: something something

//////////////////////////////////  Q5  ////////////////////////////////////////
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

// console.log(divisibilityChecker(48)); // Output: 48 is not divisible by 4 and 6 but by 8.

//////////////////////////////////  Q6  ////////////////////////////////////////////
// Positive/Negative Number Checker
// Q6. Write a program that determines whether a given number is positive or negative using conditional operators
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
// console.log(positiveNegative(-10)); // Output: -10 is negative.

//////////////////////////////////  Q7  ////////////////////////////////////////////
// Upvotes vs Downvotes
// Q7. Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
// This is calculated by subtracting the number of downvotes from upvotes.
// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // Output: 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // Output: -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // Output: 0

//////////////////////////////////  Q8  ////////////////////////////////////////////
// Older Than Me
// Q8. Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialized with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than /the same age as} me.
// Examples
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."
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

// console.log(p1.compareAge(p2)); // Output: "Joel is older than me."
// console.log(p2.compareAge(p1)); // Output: "Samuel is younger than me."
// console.log(p1.compareAge(p3)); // Output: "Lily is the same age as me."

//////////////////////////////////  Q9  ////////////////////////////////////////////
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
  return `Newt Amount = ${newAmt}`;
}
// console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }])); // Output: Newt Amount = 1.5
// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Eggs", quantity: 12, price: 0.1 },
//     { product: "Bread", quantity: 2, price: 1.6 },
//     { product: "Cheese", quantity: 1, price: 4.5 },
//   ])
// ); // Output: Newt Amount = 10.4

//////////////////////////////////  Q10  ////////////////////////////////////////////
// Weekly Salary
// Q10. Write a function that takes a list of hours and returns the total weekly salary.
// ● The inputlist hours are listed sequentially, ordered from Monday to Sunday. ● A worker earns $10 an hour for the first 8 hours.
// ● For every overtime hour, he earns $15.
// ● On weekends,the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.
// Examples
// weeklySalary([8, 8, 8, 8, 8, 0, 0]) ➞ 400
// weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410
// weeklySalary([0, 0, 0, 0, 0, 12, 0]) ➞ 280

function weeklySalary(hourArr) {
  let salary = 0;
  for (let hour in hourArr) {
    if (hourArr[hour] != 0) {
      if (hour == 5 || hour == 6) {
        salary += (hourArr[hour] - 8) * 30 + 8 * 20;
      } else {
        if (hourArr[hour] <= 8) {
          salary += hourArr[hour] * 10;
        } else if (hourArr[hour] > 8) {
          salary += (hourArr[hour] - 8) * 15 + 8 * 10;
        } else {
          salary = salary;
        }
      }
    }
  }
  return salary;
}

// console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0])); // Output: 400
// console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0])); // Output: 410
// console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0])); // Output: 280

//////////////////////////////////  Q11  ////////////////////////////////////////////
// Q11. Given an object with students and the grades that they made on the tests that they took,
// determine which student has the best Test Average.
// The key will be the student's name and the value will be an array of their grades.
// You will only have to return the student's name.
// You do not need to return their Test Average.

// Examples
// getBestStudent({
// John: [100, 90, 80],
// Bob: [100, 70, 80]
// }) ➞ "John"
// // John's avg = 90
// // Bob's avg = 83.33
// getBestStudent({
// Susan: [67, 84, 75, 63],
// Mike: [87, 98, 64, 71],
// Jim: [90, 58, 73, 86]
// }) ➞ "Mike"
// Notes
// All students in an object will have the same amount of test scores. So no student will have taken more tests than another.

function getStudentWithBestTestAvg(studObj) {
  let maxScore = 0;
  let avgScore = 0;
  let studName = "";
  for (let stud in studObj) {
    for (let score in studObj[stud]) {
      avgScore += studObj[stud][score] / studObj[stud].length;
    }
    console.log(avgScore);
    if (avgScore > maxScore) {
      maxScore = avgScore;
      studName = stud;
    }
    avgScore = 0;
  }
  return `${studName} has the best avg test score`;
}
// console.log(
//   getStudentWithBestTestAvg({
//     John: [100, 90, 80],
//     Bob: [100, 70, 80],
//   })
// ); // Output: John has the best avg test score
// console.log(
//   getStudentWithBestTestAvg({
//     Susan: [67, 84, 75, 63],
//     Mike: [87, 98, 64, 71],
//     Jim: [90, 58, 73, 86],
//   })
// ); // Output: John has the best avg test score

//////////////////////////////////  Q12  ////////////////////////////////////////////
// Q12. This challenge is an English twist on the Japanese word game Shiritori.
// The basic premise is to follow two rules:
// 1. First character of next word must match last character of previous word.
// 2. The word must not have already been said.
// Below is an example of a Shiritori game:
// ["word", "dowry", "yodel", "leader", "righteous", "serpent"] // valid!
// ["motive", "beach"] //invalid! - beach should start with "e"
// ["hive", "eh", "hive"] //invalid! - "hive" has already been said

class Shiritori {
  words = [];
  isGameOver = false;
  score = 0;
  timeOut = 10000; // time in milliseconds

  validWordEntry() {
    document.write(`<h1 style="color: green;">valid word!</h1>`);
  }
  gameOverMessage(msg, word) {
    document.write(`<h1 style="color: red;">${msg}</h1>`);
  }
  scoreAndWordsMessage() {
    document.write(
      `<h2 style="color: green;">Score = ${this.score}, words = [${this.words}]</h2>`
    );
    document.write(
      `<h2 style="color: green;">Reload the browser to restart the game.</h2>`
    );
  }

  outOfTimeMessage() {
    document.write(
      `<h2 style="color: red;">Game over. You are out of time.</h2>`
    );
    this.scoreAndWordsMessage();
  }
  play(word) {
    if (this.words.includes(word)) {
      this.isGameOver = true;
      console.log(`Game over! ${word} already said.`);
      this.gameOverMessage(`Game over! ${word} already said.`);
      this.scoreAndWordsMessage();
    } else {
      if (this.isGameOver) {
        console.log(`Game is over! Please start a new game.`);
        this.gameOverMessage(`Game is over! Please start a new game.`);
        this.scoreAndWordsMessage();
      } else {
        if (this.words.length > 0) {
          if (word.at(0) == this.words[this.words.length - 1].at(-1)) {
            this.words.push(word);
            this.score++;
          } else {
            this.isGameOver = true;
            console.log(
              `Game over! ${word} does not start with ${this.words[
                this.words.length - 1
              ].at(-1)}.`
            );
            this.gameOverMessage(
              `Game over! ${word} does not start with ${this.words[
                this.words.length - 1
              ].at(-1)}.`
            );
            this.scoreAndWordsMessage();
          }
        } else {
          this.words.push(word);
          this.score++;
          this.validWordEntry();
        }
      }
    }
  }

  playOnBrowser() {
    let word;
    let lastWord;
    while (true) {
      const startTime = Date.now();
      if (this.words.length > 0) {
        word = prompt(
          `Enter a word starting with "${lastWord}" with in 10 seconds`
        ).toLowerCase();
        if (Date.now() - startTime >= this.timeOut) {
          this.outOfTimeMessage();
          break;
        }
      } else {
        word = prompt("Welcome to Shiritori Game.\nEnter a word").toLowerCase();
      }
      if (this.words.includes(word)) {
        this.isGameOver = true;
        alert(`Game over! ${word} already said.`);
        this.gameOverMessage(`Game over! "${word}" already said.`);
        this.scoreAndWordsMessage();
        console.log(`Game over! ${word} already said.`);
        break;
      } else {
        if (this.isGameOver) {
          console.log(
            `Game is over! Please start a new game. Score = ${this.score}`
          );
          this.gameOverMessage(`Game is over! Please start a new game.`);
          this.scoreAndWordsMessage();
        } else {
          if (this.words.length > 0) {
            if (word.at(0) == lastWord) {
              this.words.push(word);
              lastWord = this.words[this.words.length - 1].at(-1);
              this.score++;
            } else {
              this.isGameOver = true;
              alert(
                `Game over! ${word} does not start with ${this.words[
                  this.words.length - 1
                ].at(-1)}. Score = ${this.score}`
              );
              this.gameOverMessage(
                `Game over! "${word}" does not start with "${this.words[
                  this.words.length - 1
                ].at(-1)}".`
              );
              this.scoreAndWordsMessage();
              console.log(
                `Game over! ${word} does not start with ${this.words[
                  this.words.length - 1
                ].at(-1)}. Score = ${this.score}`
              );
              break;
            }
          } else {
            this.words.push(word);
            lastWord = this.words[this.words.length - 1].at(-1);
            this.score++;
          }
        }
      }
    }
  }
}

// let game1 = new Shiritori();
// game1.play("word");
// game1.play("dowry");
// game1.play("yodel");
// game1.play("leader");
// game1.play("righteous");
// game1.play("serpent");

// let game2 = new Shiritori();
// game2.play("motive");
// game2.play("beach");

let game3 = new Shiritori();
// game2.play("hive");
// game2.play("eh");
// game2.play("hive");
game3.playOnBrowser();
