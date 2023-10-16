import "./style.css";

//* Round number to X decimal places
function roundNumber(num: number, dec: number): number {
    return Math.round(num * 10 ** dec) / 10 ** dec;
}

//* WARNING: you are gonna see some much const declarations xd
function dateCalc(): void {
    //* Get DOM elements
    const dateContainer: HTMLDivElement = document.querySelector("#age")!;
    const inputDate: HTMLInputElement = document.querySelector("#date")!;
    //* Check if input is empty
    if (inputDate.value === "") {
        //* Set display to none
        dateContainer.style.display = "none";
        setTimeout(dateCalc, 50);
        return;
    } else {
        //* Set display to block
        dateContainer.style.display = "block";
    }
    //* Create time conversion variables
    const minutes: number = 1000 * 60;
    const hours: number = minutes * 60;
    const days: number = hours * 24;
    const years: number = days * 365.25;
    //* Create date object from input
    const date: Date = new Date(inputDate.value);
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    const year: number = date.getFullYear();
    //* Calculate time difference
    const nowDate: Date = new Date();
    const thenDate: Date = new Date(`${month}/${day}/${year}`);
    const diff: number = nowDate.getTime() - thenDate.getTime();
    const age: number = roundNumber(diff / years, 11);
    //* Set date container text
    dateContainer.innerHTML = `${age}`;
    //* Set time loop
    setTimeout(dateCalc, 50);
}

window.onload = dateCalc;
