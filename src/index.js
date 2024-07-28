import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
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

      <Pizza
        name='Focaccia'
        ingredients='Bread with italian olive oil and rosemary'
        photoName='pizzas/focaccia.jpg'
        price={6}
      />

      <Pizza
        name='Pizza Margherita'
        ingredients='Tomato and mozarella'
        photoName='pizzas/margherita.jpg'
        price={10}
      />
    </main>
  );
}

const Pizza = (props) => {
  console.log(props);
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className='footer'>
      All rights reserved &copy; {new Date().getFullYear()}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
