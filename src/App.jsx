import React from 'react';
import Button from './components/Button/Button';

import noImage from '@assets/img/no-image.jpg';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <nav className="header__nav">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="promo">
          <div className="wrapper">
            <div className="promo__container">
              <h1>This is React-Start-Template</h1>
              <Button outlined>Button</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <nav className="footer__nav">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default App;
