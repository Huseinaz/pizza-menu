import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <h1>Fast Pizza Co.</h1>
  );
}

const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  );
}

const Footer = () => {
  return (
    <footer>All rights reserved &copy; {new Date().getFullYear()}</footer>
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
