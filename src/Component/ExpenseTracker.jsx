import React, { useState } from 'react';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    setExpenses([...expenses, { description: input, amount: parseFloat(amount) }]);
    setInput('');
    setAmount('');
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <input
        type="text"
        placeholder="Description"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense.description}: ${expense.amount}</li>
        ))}
      </ul>
      <p>Total: ${expenses.reduce((acc, expense) => acc + expense.amount, 0)}</p>
    </div>
  );
}

export default ExpenseTracker;
