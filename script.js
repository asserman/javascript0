'use strict';

var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Ведите дату в формате YYYY-MM-DD");

var exp01 = prompt("Введите обьязательную статью в этом месяце");
var exp02 = prompt("Во сколько обойдется");
var exp11 = prompt("Введите обьязательную статью в этом месяце");
var exp12 = prompt("Во сколько обойдется");
var userExpenses = {
    exp01: exp02,
    exp11: exp12
}
var userOptionalExpenses = null;
var appData ={
    budjet : money,
    timeData : time,
    expenses: userExpenses,
    optionalExpenses: userOptionalExpenses,
    income : [], 
    saving : false
};

alert(appData.budjet/30);
