import React from 'react';
import Section from '../section/section';
import Hero from '../hero/hero';
import CrewList from '../crew-list/crew-list';
import Heading from '../heading/heading';
import styles from './layout.module.scss';
import { default as bigPlanet } from '../../assets/svg/big-planet.svg';
import { default as middlePlanet } from '../../assets/svg/middle-planet.svg';
import { default as rightPlanet } from '../../assets/svg/right-planet.svg';
import { Parallax } from 'react-scroll-parallax';
import { Element } from 'react-scroll';

export default function Layout(props) {
  return (
    <main className={styles.main_content}>
      <Section>
        <img
          src={bigPlanet}
          className={`${styles.svg_img} ${styles.svg_img_big}`}
        />
        <Hero />
        <Parallax
          className={`${styles.svg_img} ${styles.svg_img_middle}`}
          y={[20, -100]}
          tagOuter='figure'
        >
          <img src={middlePlanet} />
        </Parallax>
        <img
          src={rightPlanet}
          className={`${styles.svg_img} ${styles.svg_img_right}`}
        />
      </Section>
      <Section>
        <Element name='crew-list'>
          <Heading headingText='The Crew' />
          <CrewList />
        </Element>
      </Section>
    </main>
  );
}
