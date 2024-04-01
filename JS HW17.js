ДЗ 17. Тусувати масив
/* Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. 
Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали. 
 */


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let min = arr[0];
let max = arr.length - 1;

function myBlend(arr) {
  for (let index = 0; index < arr.length; index++) {
    let rnd = Math.floor(min + Math.random() * (max - min));
    let startBland = arr[index];
    arr[index] = arr[rnd];
    arr[rnd] = startBland;
  }
}
console.log("Before bland :", arr);
myBlend(arr);
console.log("After bland:", arr);
