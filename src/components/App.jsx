import React from 'react';
import NavBar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import styles from '../scss/styles.scss';

function App(){
  return (
    <div>
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
