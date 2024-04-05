//ДЗ 11. Параноя
  //Опис ДЗ: В нас є масив обєктів в яких міститься email.
/*   У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
  За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
  одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою. */

var arr = [
  {
    userName: "Test",
    lastName: "Test",
    email: "<test.test@gmail.com>"
  },
  {
    userName: "Dmitro",
    lastName: "Porohov",
    email: "<dmitro.porohov@yahoo.com>"
  },
  {
    userName: "Andrii",
    lastName: "",
    email: "<andrii@mail.ru>" // Нам такі не підходять
  }
];
console.log(arr);

var newArr = arr.filter(function (obj) {
  var email = obj.email;
  var pattern = /(@gmail|@yahoo)\.com/gm;
  var validation = /[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@/gm;

  if (pattern.test(email) && validation.test(email)) {
    return email
  }
})
var lastArr = newArr.map(function (obj2) {
  var lastEmail = obj2.email
  return lastEmail
})
console.log(lastArr);
