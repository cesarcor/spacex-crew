import React from 'react';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.app_footer}>
     <div className={styles.app_footer__container}>
        <b>Disclaimer:</b> This site is not affiliated, associated, authorized, endorsed
        by, or in any way officially connected with Space Exploration Technologies
        Corp (SpaceX), or any of its subsidiaries or its affiliates. The names
        SpaceX as well as related names, marks, emblems and images are registered
        trademarks of their respective owners.
      </div>
    </footer>
  );
}

export default Footer;
