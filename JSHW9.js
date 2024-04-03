
     // ДЗ 9. Без А
    //Опис ДЗ: Напишіть регулярний вираз,який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)

    let name = "At the animal world majestic wild cats are stunning";
    let pattern = /[^Aa]{6,}/g
    let matches = name.match(pattern)
    console.log(matches)