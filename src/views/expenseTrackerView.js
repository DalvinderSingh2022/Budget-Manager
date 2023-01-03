import { ListView } from "./listView";

class ExpenseTrackerView extends ListView {
    container = document.querySelector(".expense");
    sortSelect = document.querySelector("#expense-sort");
}

export default new ExpenseTrackerView();