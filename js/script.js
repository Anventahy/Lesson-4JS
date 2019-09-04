'use strict';

let money, time, appData;

function start() {
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц? ', '');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}
start();

appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');

            // проверка на введенный тип
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && !isNaN(b) && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
        alert('Ваш бюджет на день состовляет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            a = "Минимальный уровень достатка";
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            a = "Средний уровень достатка";
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            a = "Высокий уровень достатка";
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSevings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    hooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let item = prompt('Что принесет дополнительный доход? (Перечислите через запятую) ', '');
            if ((typeof (item) === 'string' && item != '' && item != null)) {
                appData.income = item.split(', ');
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
                appData.income.forEach(function(item, i) {
                    let n = i + 1;
                    alert('Способы доп. заработка: ' + item);
                });
            } else {
                i--;
            }
        }
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя свойство: ' + key + ' значение ' + appData[key]);
}
console.log('appData: ', appData);