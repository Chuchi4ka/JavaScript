//ДЗ 5 "Ялинки"
//Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): 
//на першому рядку - одна зірочка, на другій дві, і так далі. Рішення оформіть у вигляді функції, куди передаються два параметри: 
//висота трикутника та символ, яким його потрібно "малювати".

//Варіант 1
function drawTriangle(height, symbol) {
  let result = '';
  for (let i = 1; i <= height; i++) {
    result += symbol;
    console.log(result);
  }
}
drawTriangle(6, "*")

// Варіант 2
let drawTriangle = (height, symbol) => {
  let i = 1;
  let result = '';
  while (i <= height) {
    console.log(result += symbol);
    i++;
  }
}
drawTriangle(6, "*");