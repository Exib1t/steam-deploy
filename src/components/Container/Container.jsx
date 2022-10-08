import React from 'react';
import styles from './Container.module.css';

const Container = ({ children }) => {
  const bgImage = {
    backgroundImage: "url('https://community.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg')",
  };

  return (
    <section className={styles.container__wrapper} style={bgImage}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Container;
