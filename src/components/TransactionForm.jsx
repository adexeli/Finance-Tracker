import React, { useState } from 'react';
import './TransactionForm.css';

const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Investments', 'Other'];
const EXPENSE_CATEGORIES = ['Food', 'Rent', 'Entertainment', 'Transport', 'Utilities', 'Other'];

export default function TransactionForm({ onAdd }) {
  const [type, setType] = useState('expense');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(EXPENSE_CATEGORIES[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !amount || Number(amount) <= 0) return;

    onAdd({
      type,
      name: name.trim(),
      amount: Number(amount),
      category
    });

    setName('');
    setAmount('');
    // keep category and type same as last for convenience
  };

  const handleTypeChange = (newType) => {
    setType(newType);
    setCategory(newType === 'income' ? INCOME_CATEGORIES[0] : EXPENSE_CATEGORIES[0]);
  };

  return (
    <form className="transaction-form glass-card" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      
      <div className="type-toggle">
        <button 
          type="button" 
          className={`toggle-btn ${type === 'income' ? 'active-income' : ''}`}
          onClick={() => handleTypeChange('income')}
        >
          Income
        </button>
        <button 
          type="button" 
          className={`toggle-btn ${type === 'expense' ? 'active-expense' : ''}`}
          onClick={() => handleTypeChange('expense')}
        >
          Expense
        </button>
      </div>

      <div className="form-group">
        <label>Transaction Name</label>
        <input 
          type="text" 
          placeholder="e.g. Groceries" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input 
          type="number" 
          placeholder="0.00" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {type === 'income' 
            ? INCOME_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)
            : EXPENSE_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)
          }
        </select>
      </div>

      <button type="submit" className="btn-primary submit-btn">
        Add {type === 'income' ? 'Income' : 'Expense'}
      </button>
    </form>
  );
}
