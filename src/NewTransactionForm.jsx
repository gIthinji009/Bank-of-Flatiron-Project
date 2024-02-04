import React from 'react';
import transactions from './db.json'

const NewTransactionForm = ({
  newTransaction,
  handleInputChange,
  handleAddTransaction,
}) => {
  return (
    <form>
      <>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newTransaction.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </>
    </form>
  );
};

export default NewTransactionForm;