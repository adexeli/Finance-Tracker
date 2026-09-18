# Build Personal Finance Tracker

This plan details the approach for building a modern, responsive personal finance tracker in React, fulfilling all the requirements using client-side technologies (LocalStorage) without any backend.

## Proposed Changes

We will implement a premium, dynamic UI featuring subtle gradients, glassmorphism effects, and smooth micro-animations. The data will be stored persistently in the browser using LocalStorage.

---

### Core Application State & Utilities

We'll define the main application state and utilities to manage transactions, handle LocalStorage synchronization, and calculate totals.

#### [MODIFY] [App.jsx](file:///c:/Users/Mysthael/Desktop/Finance%20Tracker/src/App.jsx)
- Set up the main layout and structure of the application.
- Implement state for `transactions` array.
- Add `useEffect` hooks to load from and save to LocalStorage (`finance_tracker_data`).
- Create helper functions to add and delete transactions.
- Calculate `totalIncome`, `totalExpenses`, and `currentBalance` to pass down to child components.

#### [MODIFY] [index.css](file:///c:/Users/Mysthael/Desktop/Finance%20Tracker/src/index.css)
- Reset default browser styles.
- Define a modern color palette (CSS variables) featuring a sleek dark mode or a premium light theme with vibrant accent colors (green for income, red for expenses).
- Add utility classes for layout (flex, grid), typography, and smooth hover/active animations.
- Ensure full responsiveness using media queries for mobile and desktop screens.

---

### UI Components

We'll break down the UI into functional React components for better maintainability.

#### [NEW] [DashboardSummary.jsx](file:///c:/Users/Mysthael/Desktop/Finance%20Tracker/src/components/DashboardSummary.jsx)
- A component to display the high-level metrics:
  - Current Balance (prominent)
  - Total Income
  - Total Expenses
- Styled as sleek metric cards.

#### [NEW] [TransactionForm.jsx](file:///c:/Users/Mysthael/Desktop/Finance%20Tracker/src/components/TransactionForm.jsx)
- A form to input new transactions.
- Fields:
  - **Type:** Radio buttons or toggle (Income / Expense)
  - **Name:** Text input
  - **Amount:** Number input
  - **Category:** Select dropdown (categories change based on selected Type)
- Form validation: Prevent submission if fields are empty or amount is <= 0.

#### [NEW] [TransactionList.jsx](file:///c:/Users/Mysthael/Desktop/Finance%20Tracker/src/components/TransactionList.jsx)
- Renders the list of transactions.
- Includes a visually pleasing empty state when no transactions exist.
- Iterates over the transactions array and renders `TransactionItem` components.

#### [NEW] [TransactionItem.jsx](file:///c:/Users/Mysthael/Desktop/Finance%20Tracker/src/components/TransactionItem.jsx)
- Displays individual transaction details: name, category, formatted amount (colored based on type), and a "Delete" button.
- Includes subtle entrance animations and hover states.

## Verification Plan

### Manual Verification
Once implemented, you can verify the application by running the Vite development server (`npm run dev`) and ensuring:
1. You can add both income and expense transactions.
2. The summary cards accurately reflect the totals.
3. Transactions persist when refreshing the page.
4. The layout adapts gracefully when viewed on a mobile-sized screen.
5. Deleting a transaction accurately updates the lists and the totals.
