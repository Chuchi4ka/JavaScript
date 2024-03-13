// ДЗ 20. Своя функція NaN
// Написати свою реалізацію функції isNaN. Не викорисутовуючи isNaN/ Number.isNaN

function MyNan(a){
  if (a === undefined){
    console.log(true)
  }                                    
  else if (a != Number(a) && a != null) {
    console.log(true);
  } else {
    console.log(false);
  }} MyNan(null)
