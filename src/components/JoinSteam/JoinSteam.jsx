import React from 'react';
import styles from './JoinSteam.module.css';

const JoinSteam = () => {
  return (
    <section className={styles.joinSteam__wrapper}>
      <div className={styles.joinSteam}>
        <div className={styles.joinSteam__item}>
          <p className={styles.joinSteam__text}>
            Join Steam and discover <br /> thousands of games to play.
          </p>
          <a className={styles.joinSteam__link} href="https://steamcommunity.com/">
            Learn More
          </a>
        </div>
        <div className={styles.joinSteam__item}>
          <img className={styles.joinSteam__img} src="https://community.akamai.steamstatic.com/public/shared/images/login/join_pc.png?v=1" alt="" />
        </div>
        <div className={[styles.joinSteam__item, styles.joinSteam__itemEnd].join(' ')}>
          <a className={styles.joinSteam__button} href="https://steamcommunity.com/">
            Join Steam
          </a>
          <p className={styles.joinSteam__text}>It's free and easy to use.</p>
        </div>
      </div>
    </section>
  );
};

export default JoinSteam;
