import { transactionType } from "../modal";

class AddTransactionView {
    parentelment = document.querySelector(".transaction-form");
    valueInput = this.parentelment.querySelector(".value-field");
    typeSelect = this.parentelment.querySelector(".transaction-type")

    addSubmitHandler(handler) {
        this.parentelment.addEventListener("submit", handler.bind(this));
    }

    clearForm() {
        this.valueInput.value = "";
    }

    get amount() {
        return parseFloat(this.valueInput.value);
    }

    get type() {
        return this.typeSelect.value;
    }
}

export default new AddTransactionView();