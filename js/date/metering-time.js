"use strict";

//Этот приём можно использовать для измерения времени:

let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // заканчиваем отсчёт времени

alert(`Цикл отработал за ${end - start} миллисекунд`); // вычитаются числа, а не даты
