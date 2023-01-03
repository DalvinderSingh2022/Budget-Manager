import { Transaction, transactionType } from "./modal";
import AddTransactionView from "./views/addtransactionView";
import BalanceView from "./views/balanceView";
import ExpenseTrackerView from "./views/expenseTrackerView";
import IncomeTrackerView from "./views/incomeTrackerView";

const getTransactionFromLS = (type) => {
    return JSON.parse(localStorage.getItem(type)) || [];
}

const saveTransactionInLS = (transaction) => {
    let data = getTransactionFromLS(transaction.type);
    if (Array.isArray(data)) {
        data.push(transaction);
        localStorage.setItem(transaction.type, JSON.stringify(data));
    }
}

const controlAddTransaction = (event) => {
    event.preventDefault();
    const { amount, type } = AddTransactionView;
    const newtran = new Transaction(type, amount);
    saveTransactionInLS(newtran);
    AddTransactionView.clearForm();
    BalanceView.render(totalBalance());

    if (newtran.type === transactionType.EXPENSE) {
        ExpenseTrackerView.pushTransaction(newtran);
    } else {
        IncomeTrackerView.pushTransaction(newtran);
    }
}

const totalBalance = () => {
    let expense = getTransactionFromLS(transactionType.EXPENSE);
    let income = getTransactionFromLS(transactionType.INCOME);
    let total = 0;
    if (Array.isArray(expense) && Array.isArray(income)) {
        income.forEach(inc => total += inc.value);
        expense.forEach(exp => total -= exp.value);
    }
    return total;
}

const sortList = (type, order) => {
    const list = getTransactionFromLS(type);
    if (Array.isArray(list)) {
        if (order == "increase") {
            list.sort((a, b) => { return a.value - b.value });
        }
        if (order == "decrease") {
            list.sort((a, b) => { return b.value - a.value });
        }
    }
    return list;
}

const filterSelect = (event) => {
    if (event.target.id === "income-sort") {
        const list = sortList(transactionType.INCOME, event.target.value);
        IncomeTrackerView.render(list);
    } else {
        const list = sortList(transactionType.EXPENSE, event.target.value);
        ExpenseTrackerView.render(list);
    }
}

const init = () => {
    AddTransactionView.addSubmitHandler(controlAddTransaction);
    BalanceView.render(totalBalance());
    ExpenseTrackerView.render(getTransactionFromLS(transactionType.EXPENSE));
    IncomeTrackerView.render(getTransactionFromLS(transactionType.INCOME));
    IncomeTrackerView.addSortChangeListner(filterSelect);
    ExpenseTrackerView.addSortChangeListner(filterSelect);
};
init();