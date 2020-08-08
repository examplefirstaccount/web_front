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