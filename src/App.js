import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import FloatingImage from './FloatingImage';

function App() {
  return (
    <div className="App">
      <Header />
      <FloatingImage />
      <div className="content">
      <h2>Welcome to PennyPincherPal</h2>
        <h3><p>Take control of your financesand achieve  your </p>
        <p>financial goals with our easy-to-use finance tracking tools.</p>
        <p>Track Your Expenses: Keep a record of your daily spending to see where</p>
        <p>your money goes.</p></h3>
        <button className="start-button">Start Now</button> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
