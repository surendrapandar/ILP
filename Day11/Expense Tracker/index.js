"use strict";
let expenseName = document.querySelector("#expense-name");
let expenseAmount = document.querySelector("#expense-amount");
const addExpense = document.querySelector("#addExpense");
const expenseList = document.querySelector("#expense-list");
let totalAmount = document.querySelector("#total-amount");
addExpense === null || addExpense === void 0 ? void 0 : addExpense.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(expenseAmount?.value);
    // console.log(expenseName?.value)
    // console.log(expenseList)
    totalAmount.innerHTML = String(Number(totalAmount.innerHTML) + Number(expenseAmount === null || expenseAmount === void 0 ? void 0 : expenseAmount.value));
    const newRow = document.createElement("tr");
    const tdExpenseName = document.createElement("td");
    tdExpenseName.textContent = expenseName === null || expenseName === void 0 ? void 0 : expenseName.value;
    const tdExpenseAmount = document.createElement("td");
    tdExpenseAmount.textContent = expenseAmount === null || expenseAmount === void 0 ? void 0 : expenseAmount.value;
    const btn = document.createElement("td");
    btn.className = "delete-btn";
    btn.textContent = "Delete";
    newRow.appendChild(tdExpenseName);
    newRow.appendChild(tdExpenseAmount);
    newRow.appendChild(btn);
    expenseList.appendChild(newRow);
    expenseName.value = "";
    expenseAmount.value = "";
    btn.addEventListener("click", () => {
        expenseList.removeChild(newRow);
        totalAmount.innerHTML = String(Number(totalAmount.innerHTML) - Number(tdExpenseAmount.textContent));
    });
});
