import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from '../src/components/header';
import PaymentPortal from '../src/components/pages/paymentPortal';

function App() {
  return (
    <div className="App">
      <Header />
      <PaymentPortal />
    </div>
  );
}

export default App;
