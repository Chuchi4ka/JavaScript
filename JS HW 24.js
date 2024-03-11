//Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

//ДЗ 24
//Варіант 1 while

  let num = 1;
  let sum = 0;
  while(num <= 100){
    if(num % 3 !==0){
    sum = sum + num;
  } num++
} console.log("Total = " + sum);

//Варіант 2 for

let num = 1 
let sum = 0

for(; num <=100; num++){
  if (num % 3 !== 0) {
    sum += num
  }
} console.log("Total = " + sum)
