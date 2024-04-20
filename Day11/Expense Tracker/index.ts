let expenseName = document.querySelector("#expense-name") as HTMLInputElement;
let expenseAmount = document.querySelector("#expense-amount") as HTMLInputElement;
const addExpense = document.querySelector("#addExpense") as HTMLButtonElement;
const expenseList = document.querySelector("#expense-list") as HTMLTableSectionElement; 
let totalAmount = document.querySelector("#total-amount")  as HTMLTextAreaElement

addExpense?.addEventListener("click", (e) => {
    e.preventDefault();

    // console.log(expenseAmount?.value);
    // console.log(expenseName?.value)
    // console.log(expenseList)
    
    totalAmount.innerHTML = String(Number(totalAmount.innerHTML)+ Number(expenseAmount?.value))

    const newRow = document.createElement("tr")
    const tdExpenseName = document.createElement("td")
    tdExpenseName.textContent = expenseName?.value
    const tdExpenseAmount = document.createElement("td")
    tdExpenseAmount.textContent = expenseAmount?.value
    const btn = document.createElement("td")
    btn.className = "delete-btn"
    btn.textContent = "Delete"

    newRow.appendChild(tdExpenseName)
    newRow.appendChild(tdExpenseAmount)
    newRow.appendChild(btn)
    
    expenseList.appendChild(newRow)
    expenseName.value = ""
    expenseAmount.value = ""

    btn.addEventListener("click", () => {
        expenseList.removeChild(newRow)
        totalAmount.innerHTML = String(Number(totalAmount.innerHTML) - Number(tdExpenseAmount.textContent))
    } )
});
