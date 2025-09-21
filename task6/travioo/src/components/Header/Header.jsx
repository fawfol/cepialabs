import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/" className={styles.logo}>
          Travio
        </a>
        <div className={styles.actions}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.signupBtn}>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
