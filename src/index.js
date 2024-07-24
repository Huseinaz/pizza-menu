import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
    <img src='pizzas/prosciutto.jpg' alt='Pizza Prosciutto' />
      <h2>Pizza Prosciutto</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
