class BalanceView {
    container = document.querySelector(".balance");
    render(balance) {
        this.container.innerHTML = "Rs. " + balance;
        if (balance < 0) {
            this.container.classList.remove("green");
            this.container.classList.add("red");
        } else if (balance > 0) {
            this.container.classList.remove("red");
            this.container.classList.add("green");
        }else{
            this.container.classList.remove("green", "red");
        }
    }
}

export default new BalanceView();