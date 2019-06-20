export class SomeModule {
    constructor(inputId) {
        this.inputId = inputId;
    }
    doWork() {
        window.setTimeout(() => {
            const element = document.getElementById(this.inputId);
            if (element === null) {
                return;
            }
            const input = element;
            input.value = "Work is done!";
        }, 5000);
    }
}
