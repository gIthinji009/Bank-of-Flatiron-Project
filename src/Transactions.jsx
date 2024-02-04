
import React, { Fragment, useState } from "react";
import TransactionList from './TransactionList';
import NewTransactionForm from './NewTransactionForm';
import App from "./App";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: 0 });
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setNewTransaction({
      ...newTransaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTransaction = () => {
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ description: '', amount: 0 });
  };

  return (
    <div>
      <h2>Transactions</h2>

      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <TransactionList transactions={transactions} searchTerm={searchTerm} />

      <h2>Add New Transaction</h2>
      <NewTransactionForm
        newTransaction={newTransaction}
        handleInputChange={handleInputChange}
        handleAddTransaction={handleAddTransaction}
      />
    </div>
  );
};

export default Transactions;
