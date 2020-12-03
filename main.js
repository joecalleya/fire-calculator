// declare vars and calc method
const display = document.querySelector('#screen__display');
const salary = document.querySelector('#salary');
const expenses = document.querySelector('#expenses');
const savings = document.querySelector('#savings');
const interestRate = document.querySelector('#interestRate');
const refreshButton = document.querySelector('.form__buttons__refresh');

// set up refresh button listener
refreshButton.addEventListener('click', (event) => {
    location.reload();
  
  });
    
//this function will take the input values from the html for and 
// calculate the future value of the investments

  const calc = () => {

    const interestRateDecimal = interestRate.value / 100;
    const targetSavings = 25 * expenses.value;
    const yearlySaving = salary.value - expenses.value;

    //calculation for time to save from the internet
    const timeToSave =

        Math.round([1 / (Math.log(1 + interestRateDecimal))] * [Math.log(yearlySaving + targetSavings * interestRateDecimal) - Math.log(yearlySaving + savings.value * interestRateDecimal)]);

    //return to display
    display.innerHTML = ``;
    display.innerHTML += `<p>30x expenses rule target savings:<span> £${targetSavings}</span></p>`;
    display.innerHTML += `<p><br> starting with  <span> £${savings.value}</span></p>`;
    display.innerHTML += `<p><br>by saving <span>£${yearlySaving}</span> per year, at a rate of <span>${interestRate.value} % </span></p>`;
    display.innerHTML += `<p><br> you can save this, in approximately <span>${timeToSave}</span> years</p>`;

};