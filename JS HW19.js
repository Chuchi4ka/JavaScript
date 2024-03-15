// ДЗ 19. Свій padEnd/padStart
/* Опис ДЗ: Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true),
 яка приймає чотири аргументи:
1. рядок, до якого буде додаватися символ.
2. символ, який буде додаватися.
3. Скільки додавати символів
4. булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
5. Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ

Функція повина повертати новий рядок */


 function padStartEnd(str, symbol, length, bool) {

  if (str.length >= length) {

    console.log(str)

  }else if (bool === true) {

    console.log(symbol.repeat(length - str.length) + str);

  }  else {

    console.log(str + symbol.repeat(length - str.length));

  }

} padStartEnd("kitty", "*", 8, true)
 