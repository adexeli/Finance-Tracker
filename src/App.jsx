import { useState, useEffect } from 'react'
import DashboardSummary from './components/DashboardSummary'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('finance_tracker_data');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('finance_tracker_data', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions(prev => [
      { ...transaction, id: crypto.randomUUID(), date: new Date().toISOString() },
      ...prev
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const currentBalance = totalIncome - totalExpenses;

  return (
    <>
      <header className="animate-slide-up">
        <h1>Finance <span className="text-gradient">Tracker</span></h1>
        <p>Keep track of your income and expenses simply.</p>
      </header>

      <main className="grid-container">
        <aside className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <DashboardSummary 
            balance={currentBalance} 
            income={totalIncome} 
            expense={totalExpenses} 
          />
          <TransactionForm onAdd={addTransaction} />
        </aside>
        
        <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <TransactionList 
            transactions={transactions} 
            onDelete={deleteTransaction} 
          />
        </section>
      </main>
    </>
  )
}

export default App
