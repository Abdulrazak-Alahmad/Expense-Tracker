import React from 'react'
import './App.css'
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpenses } from './component/IncomeExpenses';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';
import { GlobalProvidor } from './context/GlobalState';
function App() {
  return (
    <GlobalProvidor className="">
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvidor>
  );
}

export default App;