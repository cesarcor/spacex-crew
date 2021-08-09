import React from 'react';
import styles from './heading.module.scss';

export default function Heading(props) {
    return (
        <h2 className={styles.heading}>
          {props.headingText}  
        </h2>
    )
}