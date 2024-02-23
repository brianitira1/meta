//functional programming approach
//this code was written by Brian Itira
/*class ExpenseTracker {
  constructor(expenses) {
    this.expenses = expenses;
  }

  calculateExpenses() {
    return this.expenses.reduce((acc, expense) => acc + expense, 0);
  }
}

function displaySelectedExpenses() {
  let selectedExpense = document.getElementById("selected");
  let inputs = document.querySelectorAll("input");

  let expenses = [];
  inputs.forEach((input) => {
    expenses.push({
      name: input.previousElementSibling.textContent.trim(),
      amount: input.value.trim() ? parseFloat(input.value.trim()) : 0,
    });
  });

  let selectedExpensesText = expenses
    .map((expense) => `${expense.name}: $${expense.amount}`)
    .join(", ");
  selectedExpense.innerText = selectedExpensesText;
}

function computeExpenses() {
  let inputs = document.querySelectorAll("input");
  let expenses = [];
  inputs.forEach((input) => {
    let value = parseFloat(input.value.trim());
    if (!isNaN(value)) {
      expenses.push(value);
    }
  });

  let getTotal = new ExpenseTracker(expenses);
  let total = getTotal.calculateExpenses();

  let resultDisplay = document.getElementById("result");
  resultDisplay.innerText = `Total Expenses: $${total}`;
}

document.addEventListener("DOMContentLoaded", function () {
  let addButtons = document.querySelectorAll(".addBtn");
  let computeButton = document.getElementById("compute");

  addButtons.forEach((button) => {
    button.addEventListener("click", displaySelectedExpenses);
  });

  computeButton.addEventListener("click", computeExpenses);
});
*/

//this code was written by Brian Itira (software engineer) on Fri, Feb 23 (2024)

//better object oriented programming approach

class ExpenseTracker {
  constructor(
    inputs,
    selectedExpense,
    resultDisplay,
    addButtons,
    computeButton,
  ) {
    this.inputs = inputs;
    this.selectedExpense = selectedExpense;
    this.resultDisplay = resultDisplay;
    this.addButtons = addButtons;
    this.computeButton = computeButton;
  }

  calculateExpenses() {
    let expenses = [];
    this.inputs.forEach((input) => {
      let value = parseFloat(input.value.trim());
      if (!isNaN(value)) {
        expenses.push(value);
      }
    });

    return expenses.reduce((acc, expense) => acc + expense, 0);
  }

  displaySelectedExpenses() {
    let expenses = [];
    this.inputs.forEach((input) => {
      expenses.push({
        name: input.previousElementSibling.textContent.trim(),
        amount: input.value.trim() ? parseFloat(input.value.trim()) : 0,
      });
    });

    let selectedExpensesText = expenses
      .map((expense) => `${expense.name}: $${expense.amount}`)
      .join(", ");
    this.selectedExpense.innerText = selectedExpensesText;
  }

  computeExpenses() {
    let total = this.calculateExpenses();
    this.resultDisplay.innerText = `Total Expenses: $${total}`;
  }

  addEventListeners() {
    this.addButtons.forEach((button) => {
      button.addEventListener("click", () => this.displaySelectedExpenses());
    });

    this.computeButton.addEventListener("click", () => this.computeExpenses());
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let inputs = document.querySelectorAll("input");
  let selectedExpense = document.getElementById("selected");
  let resultDisplay = document.getElementById("result");
  let addButtons = document.querySelectorAll(".addBtn");
  let computeButton = document.getElementById("compute");

  let expenseTracker = new ExpenseTracker(
    inputs,
    selectedExpense,
    resultDisplay,
    addButtons,
    computeButton,
  );
  expenseTracker.addEventListeners();
});
