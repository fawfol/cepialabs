import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AIChatbotButton from './components/AIChatbotButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Dashboard />
      </main>
      <AIChatbotButton />
    </div>
  );
}

export default App;
