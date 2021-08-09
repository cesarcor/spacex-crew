import React from 'react';
import styles from './outline-button.module.scss';

export default function OutlineButton(props) {
    return (
        <a href="#" className={styles.outline_btn}>
            {props.btn_text}
        </a>
    )
}