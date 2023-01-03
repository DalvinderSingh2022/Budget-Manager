export class ListView {
    render(data) {
        this.data = data;
        var html = this.generateHtml();
        this.container.innerHTML = html;
    }

    generateHtml = () => {
        const data = this.data;
        let html = "";
        if (Array.isArray(data)) {
            data.forEach(transaction => {
                html += `
                <div class="list-item flex between">
                    <span>Rs. ${transaction.value}</span>
                    <span>${this.getProperDate(transaction.timespan)}</span>
                </div>`;
            })
        }
        return html;
    };

    addSortChangeListner(handler) {
        this.sortSelect.onchange = () => {
            handler(event);
        }
    }

    getProperDate(timespan) {
        return new Date(timespan).toDateString();
    }

    pushTransaction(transaction) {
        this.container.insertAdjacentHTML("afterbegin", this.generateHtmlCard(transaction));
    }

    generateHtmlCard(transaction) {
        return `
        <div class="list-item flex between">
            <span>Rs. ${transaction.value}</span>
            <span>${this.getProperDate(transaction.timespan)}</span>
        </div>`;
    }
}