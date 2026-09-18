import React from 'react';
import './DashboardSummary.css';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export default function DashboardSummary({ balance, income, expense }) {
  return (
    <div className="dashboard-summary glass-card">
      <div className="balance-container">
        <h3>Current Balance</h3>
        <h2 className={balance < 0 ? 'negative' : ''}>
          {formatCurrency(balance)}
        </h2>
      </div>
      
      <div className="stats-row">
        <div className="stat-card income">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
            </svg>
          </div>
          <div className="stat-info">
            <p>Income</p>
            <h4>{formatCurrency(income)}</h4>
          </div>
        </div>
        
        <div className="stat-card expense">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
            </svg>
          </div>
          <div className="stat-info">
            <p>Expenses</p>
            <h4>{formatCurrency(expense)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
