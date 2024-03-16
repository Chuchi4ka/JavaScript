//ДЗ 24. Робота з обьектом
//Опис ДЗ: Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), який виводитиме всі 
//властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта.

let pet = {
  species: "cat",
  breed: "Devon Rex",
  name: "Tolya",
  get fullPetInfo() {
  return `${this.species} ${this.breed} ${this.name} ${this.age}`
  },
  };
  console.log(pet.fullPetInfo)
  pet.age = 2;
  console.log(pet.fullPetInfo)