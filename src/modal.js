export const transactionType = {
    INCOME: "INCOME",
    EXPENSE: "EXPENSE"
};

export class Transaction {
    value;
    type;
    id;
    timespan;

    constructor(type, value) {
        if (typeof (value) !== "number" || isNaN(value)) {
            throw new TypeError("value sholud be a number");
        }
        this.value = value;
        if (!(type in transactionType)) {
            throw new TypeError("type sholud only INCOME or EXPENSE")
        }
        this.type = type;
        this.id = `${type}-${value}-${Math.random().toFixed(4) * 100}`;
        this.timespan = Date.now();
    }
}