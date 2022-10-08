import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.siteHeader__wrapper}>
      <ul className={styles.siteHeader}>
        <li className={styles.siteHeader__item}>
          <a href="https://steamcommunity.com/" className={styles.siteHeader__link}>
            <img
              className={styles.siteHeader__logo}
              src="https://community.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
              alt=""
            />
          </a>
        </li>

        <li className={styles.siteHeader__item}>
          <a className={styles.siteHeader__link} href="https://steamcommunity.com/">
            Store
          </a>
        </li>
        <li className={styles.siteHeader__item}>
          <a className={styles.siteHeader__link} href="https://steamcommunity.com/">
            Community
          </a>
        </li>
        <li className={styles.siteHeader__item}>
          <a className={styles.siteHeader__link} href="https://steamcommunity.com/">
            About
          </a>
        </li>
        <li className={styles.siteHeader__item}>
          <a className={styles.siteHeader__link} href="https://steamcommunity.com/">
            Support
          </a>
        </li>

        <li className={styles.siteHeader__authorization}>
          <a href="https://steamcommunity.com/" className={styles.siteHeader__authorizationButton}>
            Install Steam
          </a>
          <a href="https://steamcommunity.com/" className={styles.siteHeader__authorizationLink}>
            login
          </a>
          &nbsp; | &nbsp;
          <a href="https://steamcommunity.com/" className={styles.siteHeader__authorizationLink}>
            language
            {/*todo Do triangle with languages*/}
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
