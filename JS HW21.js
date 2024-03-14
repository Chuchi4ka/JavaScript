//ДЗ 21. Теорія ймовірності
/* Опис ДЗ: Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно.
 Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції 
 checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ:
1. Функція виводить інформацію
2. Кількість згенерованих чисел: кількість чисел
3. Парних чисел: кількість парних чисел
4. Не парних чисел: кількість не парних чисел
5. Відсоток парних до не парних */

function probabilityTheory (count){
let min = 100;
let max = 1000;
let evenCount = 0;
let oddCount = 0;

for(let i = 1; i<= count; i++){
let rand = Math.floor(min + Math.random() * (max + 1 - min));
console.log(rand);
if(rand % 2 === 0){
  evenCount++;
} else{
  oddCount++;
}
} 
let evenPercent = (evenCount/(evenCount+oddCount))*100;
let oddPercent= (oddCount/(evenCount+oddCount))*100;
console.log("evenCount " + "= " + evenCount);
console.log("oddCount " + "= " + oddCount);
console.log("evenPercent " + "= " + Math.round(evenPercent) + "%");
console.log("oddPercent " + "= " + Math.round(oddPercent) + "%");
} probabilityTheory (11)