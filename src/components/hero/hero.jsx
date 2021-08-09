import React from 'react';
import Button from '../button/button';
import styles from './hero.module.scss';
import { Parallax } from 'react-scroll-parallax';

function Hero() {
  return (
    <div className={styles.hero}>
      <Parallax className={styles.hero_content} y={[55, -90]} tagOuter='figure'>
        <h1 className={styles.app_name}>SpaceX Crew</h1>
        <div className={styles.p_container}>
          <p>
            By <a href='#'>Cesar Correchel</a>
          </p>
          <p>
            Just a simple list of SpaceX crew members. This was created using
            React and the{' '}
            <a href='https://github.com/r-spacex/SpaceX-API/'>SpaceX API</a>
          </p>
        </div>
        <Button btn_text='View Crew' btn_link='#crew-list-section' />
      </Parallax>
    </div>
  );
}

export default Hero;