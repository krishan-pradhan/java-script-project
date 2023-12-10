document.querySelector('#expenseForm').addEventListener('submit', addExpense);

//getting initial data from localStorage
let expenses = JSON.parse(localStorage.getItem('myExpense')) || [];
function addExpense(e){
	e.preventDefault();
	let type = document.getElementById('expenseType').value; 
	let name = document.getElementById('name').value;
	let date = document.getElementById('date').value;
	let amount = document.getElementById('amount').value;

    if (type !== "chooseOne" && name.length > 0  && date != 0 && amount > 0 ) {
		let expenseValue = {type, name, amount, date};
		expenses.push(expenseValue);
		localStorage.setItem('myExpense', JSON.stringify(expenses));	
	}else if(type === "chooseOne"){
		alert("Please select entry type");
	}else{
		alert("input cannot be blank")
	}

	document.querySelector('#expenseForm').reset();
	showExpenses();
	totalExpense()
}

function showExpenses(){
	let tableBody = document.getElementById('tableBody');
	tableBody.innerHTML = '';
	expenses.forEach((item, index) => {
		tableBody.innerHTML += `
	     <tr>
	       <td><h5 class="mobile-view">Type</h5>${item.type}</td>
	       <td><h5 class="mobile-view">Name</h5>${item.name}</td>
	       <td><h5 class="mobile-view">Amount</h5>${item.amount}</td>
	       <td><h5 class="mobile-view">Date</h5>${item.date}</td>
		   <td><h5 class="mobile-view">Delete</h5><a class="deleteButton" onclick="deleteExpense(${index})">
		   Remove X</a></td>
	     </tr>
	     `
	    });
	}

function deleteExpense(index){
	expenses.splice(index, 1);
	localStorage.setItem('myExpense', JSON.stringify(expenses));
	showExpenses();
	totalExpense()
  	}
	function totalExpense() {
		let sum = 0;
		expenses.map(item =>{
			let totalAmount = parseInt(item.amount) 
			sum += totalAmount;
		})
		let displayTotal = document.getElementById('calculateAmount');
		displayTotal.querySelector('h2').textContent =`Total Expenses: ${sum}`;
		displayTotal.querySelector('h3').textContent = `Total Item: ${expenses.length}`
	}
	totalExpense();	
showExpenses();