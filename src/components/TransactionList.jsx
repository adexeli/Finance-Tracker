import React from 'react';
import TransactionItem from './TransactionItem';
import './TransactionList.css';

export default function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="transaction-list-empty glass-card">
        <div className="empty-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3>No transactions yet</h3>
        <p>Add an income or expense to get started.</p>
      </div>
    );
  }

  return (
    <div className="transaction-list glass-card">
      <div className="list-header">
        <h3>Transaction History</h3>
      </div>
      <div className="list-items">
        {transactions.map(t => (
          <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
