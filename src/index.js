import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className='header'>
      <h1>Fast Pizza Co.</h1>
    </header>
  );
}

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza />
    </main>
  );
}

const Footer = () => {
  return (
    <footer className='footer'>
      All rights reserved &copy; {new Date().getFullYear()}
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/prosciutto.jpg' alt='Pizza Prosciutto' />
      <h3>Pizza Prosciutto</h3>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
