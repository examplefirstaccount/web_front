//типы данных

// var number = 1;
// var string = "two";
// var boolean = true;
// null;     не существует
// undefined;  не присвоено значение
// var sym = Symbol();  !!!NEW!!!

//var obj = {}
//спец.объекты( массивы[], функции, объекты даты, регулярные выражения, ошибки)
//обычные объекты

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);  
// }


// альтернативы циклу for

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("error");
//         i--;
//     }

//     i++;
// }


// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("error");
//         i--;
//     }

//     i++;
// }
// while (i < 2);




//let arr = [1, 2, 3, 4, 5];
// arr.pop();       минус 1 элемент из конца
// arr.push(6);     заменяет последний элемент массива
//arr.shift();      удаляет 1ый элемент массива
//arr.unshift(0);   заменяет первый элемент массива
// for (let key of arr) {
//    console.log(key);
//}


// to String 
// 1.   console.log(typeof(String(5)));   5=string
// 2.   console.log("ww" + 5);   ww5=string


// to Number
// 1.   console.log(typeof(Number("5")));   "5"=number
// 2.   console.log(typeof(+"5"));   "5"=number
// 3.   console.log(typeof(parseInt("15px", 10)));


//Boolean
//      0, '', nul, undefined, NaN      -FALSE-

// 1.   let switcher = null;
//      if(switcher) {
//          console.log("Working..")
//      }

//      let switcher = 1;
//      if(switcher) {
//          console.log("Working..")
//      }
// 2.   console.log(typeof(Boolean(5)));  5=boolean
// 3.   console.log(typeof(!!"5"));       "5"=boolean

