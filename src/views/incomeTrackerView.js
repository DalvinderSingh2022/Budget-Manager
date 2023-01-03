import { ListView } from "./listView";

class IncomeTrackerView extends ListView {
    container = document.querySelector(".income");
    sortSelect = document.querySelector("#income-sort");
}

export default new IncomeTrackerView();