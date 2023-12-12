/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35; 
let numberOfDaysSelected = 0; 
let totalCost = 0; 
let dayButtons = document.querySelectorAll('.day-selector'); 




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', () => {
        if (!dayButton.classList.contains('clicked')) {
            dayButton.classList.add('clicked');
            numberOfDaysSelected++;

            calculateTotalCost();
        }
    });
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', () => {
    dayButtons.forEach(dayButton => {
        dayButton.classList.remove('clicked');
    });

    totalCost = 0;
    calculateTotalCost();
});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let halfDayButton = document.getElementById('half-day-button');
let fullDayButton = document.getElementById('full-day-button');

halfDayButton.addEventListener('click', () => {
    costPerDay = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateTotalCost();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener('click', () => {
    costPerDay = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateTotalCost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotalCost() {
    totalCost = costPerDay * numberOfDaysSelected;
    document.getElementById('calculated-cost').innerHTML = `$${totalCost}`;
}

