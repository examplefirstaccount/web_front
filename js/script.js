'use strickt';
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

let money = prompt("Ваш бюджет на месяц?", ""),
        time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    optionalExpenses: {},
    expenses: {},
    income: [],
    savings: false
}

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);