import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer}>
        <img className={styles.footer__logo} src="https://community.akamai.steamstatic.com/public/images/skin_1/footerLogo_valve.png?v=1" alt="" />
        <div className={styles.footer__column}>
          <p className={styles.footer__text}>
            © Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries. <br /> Some
            geospatial data on this website is provided by{' '}
            <a className={styles.footer__link} href="https://steamcommunity.com/">
              geonames.org
            </a>
            .
          </p>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="https://steamcommunity.com/">
                Privacy Policy
              </a>
            </li>
            &nbsp; | &nbsp;
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="https://steamcommunity.com/">
                Legal
              </a>
            </li>
            &nbsp; | &nbsp;
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="https://steamcommunity.com/">
                Steam Subscriber Agreement
              </a>
            </li>
            &nbsp; | &nbsp;
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="https://steamcommunity.com/">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
