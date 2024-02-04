import React from 'react';
import transactions from './db.json';

const TransactionList = ({ transactions, searchTerm }) => {
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionList;