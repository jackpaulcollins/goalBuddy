import React from 'react';
import NavBar from './layout/Navbar';
import Body from './signedInProfile/Body';
import Footer from './layout/Footer';
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
