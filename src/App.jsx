
import './App.css';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import React, { useState, useEffect } from 'react';
import Transactions from './Transactions';


function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the provided JSON link
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data.transactions))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div className="App">
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;

ReactDOM.render(<App/> , document.getElementById('root'));