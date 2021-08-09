import React from 'react';
import styles from './section.module.scss';

const Section = props => {
    return (
        <section className={styles.site_section}>
            {props.children}
        </section>
    )
}

export default Section;