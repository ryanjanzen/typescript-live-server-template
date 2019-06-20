export class SomeModule {
    constructor(private inputId: string) {
    }

    doWork() {
        window.setTimeout(() => {
            const element = document.getElementById(this.inputId);
            if (element === null) {
                return;
            }

            const input = element as HTMLInputElement;
            input.value = "Work is done!";
        }, 5000);
    }
}