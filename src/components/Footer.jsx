import React from 'react';
import styles from '../scss/styles.scss';

function Footer(){
  return(
    <footer className="footer">
      <div className="footerLeft">
        <ul className="lists">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Cookies</li>
        </ul>
      </div>
      <div className="footerMiddle">
        <ul className="lists">
          <li>Contact</li>
          <li>Careers</li>
          <li>item</li>
        </ul>
      </div>
      <div className="footerRight">
        <ul className="lists">
          <li>Press</li>
          <li>Settings</li>
          <li>Admin</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
