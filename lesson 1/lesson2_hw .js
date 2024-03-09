// --- Operators ----

/* Task - 1
Create variable named myAge and set its value equal your age
Display the sum of myAge + 30, using two variables: x and y. */

/* let myAge = 38;
let x = myAge;
let y = 30;
let sum = x + y;
console.log(`${x} + ${y} = ${sum}`);
// console.log(x + " + " + y + " = " + sum); */

/* Task - 2
Create variable named dividedNumber and set its value equal myAge divided by 2
 * NOTE: you should use myAge variable here */

/* let myAge = 38;
let dividedNumber = myAge / 2;
console.log(dividedNumber); */

/* Task - 3
Create variable named multipleNumber and set its value equal myAge multiply by 2 */

/* let myAge = 38;
let dividedNumber = myAge * 2;
console.log(dividedNumber); */

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'if' conditional ---

/* Task - 4
 Створіть програму, яка буде зберігати значення ваги кота. 
Якщо кіт важить менше 5 кг, то він маленький і його ще треба годувати, 
якщо більше 5, то кіт дуже пухнастий і його потрібно розчесати :) 

let weight = 5;
if (weight <= 5) {
  console.log("Cat is tiny, feed him immediately!!!")
} else {
  console.log("Cat is fluffy, brush him!")
}

Переписати інструкцію if з використанням умовного оператора '?

let weight = 52;
let message = (weight <= 5) ? 'Cat is tiny, feed him immediately!!!' : 'Cat is fluffy, brush him!';
console.log(message); */

/* Task - 5
Напишіть умову if, яка перевіряє, чи значення віку НЕ знаходиться між 18 і 50 включно, якщо це не так, то наймайте. 

let age = 51;

if (age >= 18 && age <= 50) {
  console.log("Наймати")
} else {
  console.log("Не наймати")
}

Переписати інструкцію if з використанням умовного оператора '? 

let age = 100;
let message = (age >= 18 && age <= 50) ? "Наймати" : "Не наймати";
console.log(message);

%%% https://www.tiktok.com/@devslopes/video/7260261089928105258 %%%% :))))))))))))))))) Це 1000% я і prompt*/


   
/*  Task - 6
Переписати інструкцію if з використанням умовного оператора '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}

let height = 180;
let message = (height < 140) ? "Заборонено на атракціон" : "Проходьте, будь ласка!";
console.log(message); */


/* Task - 7
Створіть сценарій. Запросіть у користувача вік. Якщо вік користувача більше ніж 18 
– виведіть на екран повідомлення «доступ дозволено». Якщо введене користувачем значення 
менше ніж 18 – виведіть на екран повідомлення «доступ заборонено»

let age = prompt("Вкажіть Ваш вік");
if (age > 18) {
  alert("Доступ дозволено")
} else {
  alert ("Доступ заборонено")
} */
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'switch' conditinal ---

/* Task - 8
Напишіть програму, яка буде показувати, до якої пори року належить певний номер місяця 
(наприклад, я вводжу "1" і вона повідомляє мені, що зараз зима, вводжу "5" - весна і т.д.). */
/* 
let month = 13;

switch (month) {
  case 1:
  console.log("Зима");
  break;
  case 2:
  console.log("Зима");
  break;
  case 3:
  console.log("Весна");
  break;
  case 4:
  console.log("Весна");
  break;
  case 5:
  console.log("Весна");
  break;
  case 6:
  console.log("Літо");
  break;
  case 7:
  console.log("Літо");
  break;
  case 8:
  console.log("Літо");
  break;
  case 9:
  console.log("Осінь");
  break;
  case 10:
  console.log("Осінь");
  break;
  case 11:
  console.log("Осінь");
  break;
  case 12:
  console.log("Зима");
  break;
  default:
    console.log("Не вірний ввод")
} */

/* Task - 9
Перепишіть "if" на "switch"

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
 */
/* let age = 15;

switch (true) {
  case age < 16:
    console.log('We cant hire u!');
  break;
  case age >= 18:
    console.log( 'U can take full time job' );
  break;
  case age == 16 || age == 17:
    console.log( 'U can take part time job' );
  break;
  default:
    console.log("Something go wrong!")  
} */