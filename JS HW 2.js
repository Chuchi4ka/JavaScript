
let age = 30;

if (age <= 0 || age === null) {
  
  console.log ("Число не повинно бути від'ємним, нульовим та пустим значенням")

} else if (isNaN(age)) {

  console.log ("Тільки числа")

} else if (age % 10 === 1 && age !== 11) {

  console.log (`Вам ${age} рік`)

} else if ((age % 10 === 2 || age % 10 === 3 || age % 10 === 4) && (age !== 12 && age !== 13 && age !== 14)) {

  console.log (`Вам ${age} роки`)

} else {
  
  console.log (`Вам ${age} років`)
}