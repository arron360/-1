let money = prompt("Ваш бюджет на месяц?","");
let	data = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
	budget: money,
	timeData: data,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings:false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце","");
let	a2 = prompt("Во сколько обойдется?", "");
let b1 = prompt("Введите обязательную статью расходов в этом месяце","");
let	b2 = prompt("Во сколько обойдется?", "");
appData.expenses[a1]=a2;
appData.expenses[b1]=b2;
alert(appData.budget/30);
