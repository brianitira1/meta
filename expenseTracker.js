class ExpenseTracker {
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
