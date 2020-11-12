// declare vars and calc method

const calc = () => {
    const display = document.querySelector('#screen__display');
    const salary = document.querySelector('#salary');
    const expenses = document.querySelector('#expenses');
    const savings = document.querySelector('#savings');
    const interestRate = document.querySelector('#interestRate');
    const interestRateDecimal = interestRate.value / 100;
    const targetSavings = 25 * expenses.value;
    const yearlySaving = salary.value - expenses.value;

    //calculation for time to save from the internet
    const timeToSave =

        Math.round([1 / (Math.log(1 + interestRateDecimal))] * [Math.log(yearlySaving + targetSavings * interestRateDecimal) - Math.log(yearlySaving + savings.value * interestRateDecimal)]);

    //return to display
    display.innerHTML = ``;
    display.innerHTML += `<br> 30x expenses rule target savings:<span> £${targetSavings}</span>`;
    display.innerHTML += `<br> starting with  <span> £${savings.value}</span>`;
    display.innerHTML += `<br>by saving <span>£${yearlySaving}</span> per year, at a rate of <span>${interestRate.value} % </span>`;
    display.innerHTML += `<br> you can save this, in approximately <span>${timeToSave}</span> years`;

};