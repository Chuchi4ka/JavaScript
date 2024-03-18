//ДЗ 25. Сума вартості послуг
//"Послуги" можуть додаватися по ходу роботи:
// services['Розбити скло'] = "200 грн";
/* Умови виконання ДЗ
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price */

/* var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

function getMinPrice(minPrice) {
  var minPrice = Infinity
  for (let i in services) {
    minPrice = Math.min(minPrice, parseInt(services[i]));
  } return minPrice;
}
console.log("Мінімальна вартість = " + getMinPrice() + " грн")


function getMaxPrice(maxPrice) {
  var maxPrice = -Infinity
  for (let i in services) {
    maxPrice = Math.max(maxPrice, parseInt(services[i]));
  } return maxPrice;
}
console.log("Максимальна вартість = " + getMaxPrice() + " грн")


function getTotalPrice(totalPrice) {
  var totalPrice = 0
  for (let i in services) {
    totalPrice = totalPrice + parseInt(services[i]);
  } return totalPrice;
}
console.log("Загальна вартість = " + getTotalPrice() + " грн")

services["Розбити скло"] = "200 грн";

console.log("Загальна вартість після додавання послуги = " + getTotalPrice() + " грн")
console.log("Максимальна вартість після додавання послуги = " + getMaxPrice() + " грн")
console.log("Мінімальна вартість після додавання послуги = " + getMinPrice() + " грн")



 */